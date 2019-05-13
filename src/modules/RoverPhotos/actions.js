import { createAction } from 'redux-actions';

export const changeSol = createAction('ROVER_PHOTOS/CHANGE_SOL');

export const fetchPhotosRequest = createAction(
  'ROVER_PHOTOS/FETCH_PHOTOS_REQUEST'
);
export const fetchPhotosSuccess = createAction(
  'ROVER_PHOTOS/FETCH_PHOTOS_SUCCESS'
);
export const fetchPhotosFailure = createAction(
  'ROVER_PHOTOS/FETCH_PHOTOS_FAILURE'
);

// export const CHANGE_SOL = 'CHANGE_SOL';
// export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
// export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
// export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';
