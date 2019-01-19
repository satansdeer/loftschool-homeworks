import { createAction } from "redux-actions";

export const fetchSearch = createAction("SEARCH");
export const fetchShow = createAction("SHOW");
export const fetchRequest = createAction("_REQUEST");
export const fetchSuccess = createAction("_SUCCESS");
export const fetchFailure = createAction("_FAILURE");