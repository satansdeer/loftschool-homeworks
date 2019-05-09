import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  CHANGE_SOL
} from './constants';
import { getRoversInitialState } from '../../../utils';

const initialStateForRoversPhotos = getRoversInitialState();

const initialState = {
  sol: {},
  photos: initialStateForRoversPhotos
};

const roverPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SOL:
      return { ...state, sol: { ...state.sol, ...action.payload } };

    case FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        photos: {
          ...state.photos,
          [action.payload.item]: {
            ...state.photos[action.payload.item],
            isLoading: true
          }
        }
      };

    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: {
          ...state.photos,
          [action.payload.item]: {
            ...state.photos[action.payload.item],
            isLoading: false,
            photos: action.payload.photos
          }
        }
      };

    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        photos: {
          ...state.photos,
          [action.payload.item]: {
            ...state.photos[action.payload.item],
            isLoading: false,
            error: true
          }
        }
      };

    default:
      return state;
  }
};

export default roverPhotosReducer;
