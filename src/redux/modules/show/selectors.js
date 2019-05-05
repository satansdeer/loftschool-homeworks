import { createSelector } from 'reselect';

const getShows = state => state.showReducer.data;

export const emailSelector = createSelector(
  [getShows],
  shows => shows
);
