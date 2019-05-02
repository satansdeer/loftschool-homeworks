import { createAction } from 'redux-actions';

export const fetchSeriesRequest = createAction('_REQUEST');
export const fetchSeriesSuccess = createAction('_SUCCESS');
export const fetchSeriesFailure = createAction('_FAILURE');