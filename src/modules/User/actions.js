import { createAction } from "redux-actions";

export const fetchUser = createAction("USER/FETCH");
export const request = createAction("_REQUEST");
export const success = createAction("_SUCCESS");
export const failure = createAction("_FAILURE");