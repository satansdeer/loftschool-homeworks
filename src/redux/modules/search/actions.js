import { REQUEST, SUCCESS, FAILURE } from '../../../constants';

export const searchSuccess = data => ({ type: SUCCESS, payload: data });

export const searchLoading = () => ({ type: REQUEST });

export const searchFailure = () => ({ type: FAILURE });
