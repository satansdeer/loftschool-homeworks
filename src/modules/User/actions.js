import { createAction } from 'redux-actions';

// Реализуйте недостающие экшены
export const fetchRequest = createAction('USERS/FETCH_REQUEST');
export const fetchSuccess = createAction('USERS/FETCH_SUCCESS');
export const fetchFailure = createAction('USERS/FETCH_FAILURE');
