import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  CHANGE_SOL
} from './constants';

export const changeSol = value => ({ type: CHANGE_SOL, payload: value });

export const fetchPhotosRequest = apiKey => ({
  type: FETCH_PHOTOS_REQUEST,
  payload: apiKey
});

export const fetchPhotosSuccess = photos => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: photos
});

export const fetchPhotosFailure = error => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error
});

// {type:'',payload:{item:'',photos:[]}}
