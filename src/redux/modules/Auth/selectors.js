import { createSelector } from 'reselect';

const apiKeySelector = state => state.authReducer.apiKey;

export const getIsAuthorized = createSelector(
  [apiKeySelector],
  key => key
);
