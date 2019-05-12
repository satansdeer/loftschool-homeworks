import { createSelector } from 'reselect';

export const getApiKey = createSelector(
    state => state.auth.apiKey, apiKey => apiKey
);

export const getIsAuthorized = createSelector(
    state => state.auth.apiKey, apiKey => apiKey
);