import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  CHANGE_SOL
} from './constants';
import { getRoversInitialState } from '../../../utils';
import { set, lensPath } from 'ramda';

const initialStateForRoversPhotos = getRoversInitialState();

const initialState = {
  sol: {
    current: 1,
    min: 1,
    max: 100
  },
  photos: initialStateForRoversPhotos,
  error: null
};

const solLens = lensPath(['sol', 'current']);
const errorLens = lensPath(['error']);

const roverPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SOL:
      return set(solLens, action.payload, state);

    case FETCH_PHOTOS_REQUEST:
      return set(
        lensPath(['photos', `${action.payload.name}`, `${action.payload.sol}`]),
        { isLoading: true, isLoaded: false, photos: [] },
        state
      );

    case FETCH_PHOTOS_SUCCESS:
      return set(
        lensPath(['photos', `${action.payload.name}`, `${action.payload.sol}`]),
        { isLoading: true, isLoaded: false, photos: action.payload.photos },
        state
      );

    case FETCH_PHOTOS_FAILURE:
      return set(errorLens, action.payload, state);

    default:
      return state;
  }
};

export default roverPhotosReducer;
