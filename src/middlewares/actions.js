import { createAction } from "redux-actions";

export const searchRequest = createAction("SEARCH_REQUEST");
export const requestSuccess = createAction("SEARCH_SUCCESS");
export const showRequest = createAction('SHOW_REQUEST');
export const showRequestSuccess = createAction('SHOW_REQUEST_SUCCESS');

export default searchRequest;
