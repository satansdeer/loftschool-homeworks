import { createSelector } from "reselect";

const userState = state => state.user;

export const getIsLoading = createSelector(userState, state => state.isLoading);
export const getData = createSelector(userState, state => state.data);