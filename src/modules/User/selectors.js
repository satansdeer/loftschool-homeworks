import { createSelector } from 'reselect';

export const getUser = createSelector(
    state => state.user.data, data => data
);

export const getIsLoading = createSelector(
    state => state.user.isLoading, isLoading => isLoading
);

export const getError = createSelector(
    state => state.user.error, error => error
);