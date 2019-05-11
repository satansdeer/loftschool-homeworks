// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом
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
    [changeSol]: (state, action) => ({ ...state, current: action.payload })
  },
  {
    current: 1,
    min: 1,
    max: 100
  }
);

export const rovers = ['curiosity', 'opportunity', 'spirit'];

const photos = combineReducers(
  rovers.reduce((accum, rover) => {
    accum[rover] = handleActions(
      {
        [fetchPhotosRequest]: (state, action) => {
          const { sol, name } = action.payload;
          return name !== rover
            ? state
            : {
                ...state,
                [sol]: {
                  photos: [],
                  isLoading: true,
                  isLoaded: false
                }
              };
        },
        [fetchPhotosSuccess]: (state, action) => {
          const { sol, name, photos } = action.payload;
          return name !== rover
            ? state
            : {
                ...state,
                [sol]: { photos, isLoading: false, isLoaded: true }
              };
        },
        [fetchPhotosFailure]: (state, action) => {
          const { sol, name, error } = action.payload;
          return name !== rover
            ? state
            : { ...state, [sol]: { error, isLoading: false } };
        }
      },
      {}
    );
    return accum;
  }, {})
);

export default combineReducers({ sol, photos });

export const getSol = state => state.roverPhotos.sol;
export const getRoversPhotos = state => state.roverPhotos.photos;
export const getSavedPhotos = (state, roverName, solId) => {
  const {
    roverPhotos: { photos }
  } = state;

  if (!photos[roverName][solId]) {
    return null;
  }

  return photos[roverName][solId].photos;
};
