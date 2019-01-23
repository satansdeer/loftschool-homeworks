import { createAction } from "redux-actions";

export const fetchFollowers = createAction("FOLLOWERS/FETCH");
export const request = createAction("_REQUEST");
export const success = createAction("_SUCCESS");
export const failure = createAction("_FAILURE");
