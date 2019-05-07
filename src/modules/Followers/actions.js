import { createAction } from 'redux-actions';

// Здесь не хватает экшенов для модуля FOLLOWERS.
// FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE
export const fetchRequest = createAction('FOLLOWERS/FETCH_REQUEST');
export const fetchSuccess = createAction('FOLLOWERS/FETCH_SUCCESS');
export const fetchFailure = createAction('FOLLOWERS/FETCH_FAILURE');
