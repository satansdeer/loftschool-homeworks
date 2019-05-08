import { createAction } from 'redux-actions';

export const fetchSearchRequest = createAction('SEARCH_REQUEST');
export const fetchSearchSuccess = createAction('SEARCH_SUCCESS');
export const fetchSearchFailure = createAction('SEARCH_FAILURE');