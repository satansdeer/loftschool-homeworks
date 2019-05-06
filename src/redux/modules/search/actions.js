import { createAction } from 'redux-actions';
import { REQUEST, SUCCESS, FAILURE } from './constants';

export const searchRequest = createAction(REQUEST);
export const searchSuccess = createAction(SUCCESS);
export const searchFailure = createAction(FAILURE);
