// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом

import { handleActions } from 'redux-actions';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер

export const getApiKey = state => state.auth.apiKey;

const user = handleActions(
  {
    [changeSol]: (state, action) => ({
      ...state,
      sol: { ...state.sol, current: action.payload }
    }),
    [fetchPhotosRequest]: (state, action) => ({
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
    }),

    [fetchPhotosSuccess]: (state, action) => ({
      ...state,
      photos: {
        ...state.photos,
        [action.payload.name]: {
          ...state.photos[action.payload.name],
          [action.payload.sol]: {
            isLoading: false,
            isLoaded: true,
            photos: action.payload.photos
          }
        }
      }
    }),

    [fetchPhotosFailure]: (state, action) => {
      console.log(action);
    }
  },
  {
    photos: { curiosity: {}, opportunity: {}, spirit: {} },
    sol: { current: 1, min: 1, max: 100 }
  }
);

export default user;
