import { createAction } from 'redux-actions';

// Реализуйте недостающие экшены
export const fetchUserRequest = createAction('USERS_FETCH_REQUEST');
export const fetchUserSuccess = createAction('USERS_FETCH_SUCCESS');
export const fetchUserFailure = createAction('USERS_FETCH_FAILURE');
