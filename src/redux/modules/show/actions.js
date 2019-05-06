import { REQUEST, SUCCESS, FAILURE } from './constants';

export const showSuccess = data => ({ type: SUCCESS, payload: data });

export const showLoading = () => ({ type: REQUEST });

export const showFailure = () => ({ type: FAILURE });
