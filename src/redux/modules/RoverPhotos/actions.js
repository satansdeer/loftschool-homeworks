import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  CHANGE_SOL
} from './constants';

export const changeSol = (apiKey, sol) => ({
  type: CHANGE_SOL,
  payload: { apiKey, sol }
});

export const fetchPhotosRequest = (apiKey, sol) => ({
  type: FETCH_PHOTOS_REQUEST,
  payload: { apiKey, sol }
});

export const fetchPhotosSuccess = (photos, item) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: { item, photos }
});

export const fetchPhotosFailure = error => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error
});

// {type:'',payload:{item:'',photos:[]}}
