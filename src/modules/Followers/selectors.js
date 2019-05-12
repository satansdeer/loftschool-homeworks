import { createSelector } from 'reselect';

export const getFollowers = createSelector(
    state => state.followers.data, data => data
);

export const getIsLoading = createSelector(
    state => state.followers.isLoading, isLoading => isLoading
);

export const getError = createSelector(
    state => state.followers.error, error => error
);