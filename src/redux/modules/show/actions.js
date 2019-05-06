import { createAction } from 'redux-actions';
import { REQUEST, SUCCESS, FAILURE } from './constants';

export const showRequest = createAction(REQUEST);
export const showSuccess = createAction(SUCCESS);
export const showFailure = createAction(FAILURE);
