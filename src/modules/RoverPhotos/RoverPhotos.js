import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';

const sol = handleActions(
  {
    [changeSol]: (state, action) => ({
      ...state,
      current: action.payload
    })
  },
  {
    current: 1,
    min: 1,
    max: 100
  }
);

const photos = handleActions(
  {
    [fetchPhotosRequest]: (state, { payload: { name, sol } }) => ({
      ...state,
      [name]: {
        ...state[name],
        [sol]: {
          isLoading: true,
          isLoaded: false,
          photos: []
        }
      }
    }),

    [fetchPhotosSuccess]: (state, { payload: { name, sol, photos } }) => ({
      ...state,
      [name]: {
        ...state[name],
        [sol]: {
          isLoading: false,
          isLoaded: true,
          photos: photos
        }
      }
    }),
    [fetchPhotosFailure]: (state, { payload: { name, sol, error } }) => ({
      ...state,
      [name]: {
        ...state[name],
        [sol]: {
          isLoading: false,
          isLoaded: true,
          error
        }
      }
    })
  },
  {
    curiosity: {},
    opportunity: {},
    spirit: {}
  }
);

export default combineReducers({
  sol,
  photos
});

export const getRovers = () => ['curiosity', 'opportunity', 'spirit'];
export const getSelectedSol = state => state.roverPhotos.sol.current;
export const getMaxSol = state => state.roverPhotos.sol.max;
export const getMinSol = state => state.roverPhotos.sol.min;
export const getRoverPhotosBySol = (state, rover, sol) =>
  state.roverPhotos.photos[rover][sol] !== undefined
    ? state.roverPhotos.photos[rover][sol].photos
    : [];

export const getIsLoadingPhotos = (state, rover, sol) => {
  const obj = state.roverPhotos.photos[rover][sol];
  return obj !== undefined ? obj.isLoaded : false;
};
