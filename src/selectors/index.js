import { createSelector } from "reselect";

// ---- search selectors ----

export const search = state => state.search;

export const getSearchLoading = createSelector(search, search => search.loading);

export const getSearchLoaded = createSelector(search, search => search.loaded);

export const getSearchError = createSelector(search, search => search.error);

export const getSearchData = createSelector(search, search => search.data);

// ---- show selectors ----

export const shows = state => state.shows;

export const getShowsLoading = createSelector(shows, search => search.loading);

export const getShowsLoaded = createSelector(shows, search => search.loaded);

export const getShowsError = createSelector(shows, search => search.error);

export const getShowsData = createSelector(shows, search => search.showData);