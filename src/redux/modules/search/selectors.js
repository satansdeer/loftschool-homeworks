import { createSelector } from 'reselect';

const getShows = state => state.searchReducer.series;
const getLoadingState = state => state.searchReducer.isLoading;

export const getShowsSelector = createSelector(
  [getShows],
  shows => shows
);

export const isLoadingSelector = createSelector(
  [getLoadingState],
  state => state
);
