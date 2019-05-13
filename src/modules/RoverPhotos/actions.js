import {createAction} from 'redux-actions';

export const changeSol = createAction('ROVER_PHOTOS/CHANGE_SOL');

export const fetchPhotosRequest = (name, sol, apiKey) => ({
  type: 'FETCH_PHOTOS_REQUEST',
  payload: { apiKey, sol, name }
});

export const fetchPhotosSuccess = createAction(
  'ROVER_PHOTOS/FETCH_PHOTOS_SUCCESS'
);
export const fetchPhotosFailure = createAction(
  'ROVER_PHOTOS/FETCH_PHOTOS_FAILURE'
);
