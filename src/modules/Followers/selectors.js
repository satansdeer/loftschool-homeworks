import { createSelector } from "reselect";

const FollowersState = state => state.followers;

export const getIsLoading = createSelector(FollowersState, state => state.isLoading);
export const getData = createSelector(FollowersState, state => state.data);