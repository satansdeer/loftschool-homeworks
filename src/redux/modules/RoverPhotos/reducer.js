import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  CHANGE_SOL
} from './constants';
import { getRoversInitialState } from '../../../utils';

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

const roverPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SOL:
      return { ...state, sol: { ...state.sol, current: action.payload } };

    case FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        photos: {
          ...state.photos,
          [action.payload.name]: {
            ...state.photos[action.payload.name],
            [action.payload.sol]: {
              isLoading: true,
              isLoaded: false,
              photos: []
            }
          }
        }
      };

    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: {
          ...state.photos,
          [action.payload.name]: {
            ...state.photos[action.payload.name],
            [action.payload.sol]: {
              ...state.photos[action.payload.name][action.payload.sol],
              isLoading: false,
              isLoaded: true,
              photos: action.payload.photos
            }
          }
        }
      };

    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default roverPhotosReducer;
