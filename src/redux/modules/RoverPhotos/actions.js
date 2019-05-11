import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  CHANGE_SOL
} from './constants';

export const changeSol = sol => ({
  type: CHANGE_SOL,
  payload: sol
});

export const fetchPhotosRequest = (name, sol, apiKey = '') => ({
  type: FETCH_PHOTOS_REQUEST,
  payload: { apiKey, sol, name }
});

export const fetchPhotosSuccess = (photos, name, sol) =>
  console.log('fetchPhotosSuccess', photos, name, sol) || {
    type: FETCH_PHOTOS_SUCCESS,
    payload: { name, photos, sol }
  };

export const fetchPhotosFailure = error => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error
});
