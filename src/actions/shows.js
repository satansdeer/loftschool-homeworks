import { createAction } from 'redux-actions';

export const fetchShowsRequest = createAction('SHOWS_REQUEST');
export const fetchShowsSuccess = createAction('SHOWS_SUCCESS');
export const fetchShowsFailure = createAction('SHOWS_FAILURE');