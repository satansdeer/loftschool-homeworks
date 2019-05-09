import { createSelector } from 'reselect';

const apiKey = state => state.authReducer.apiKey;

export const getIsAuthorized = createSelector(
  [apiKey],
  key => key
);
