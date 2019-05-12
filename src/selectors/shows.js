import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const getIsLoading = createSelector(
  state => state.shows.isLoading,
  isLoading => isLoading
);

export const getError = createSelector(
  state => state.shows.error,
  error => error
);

export const getShows = createSelector(
  state => state.shows.shows,
  shows => shows
);

export const showSelector = createSelector(
  state => state.shows.shows,
  shows => memoize(showId => shows.find(show => show.id === parseInt(showId)))
);
