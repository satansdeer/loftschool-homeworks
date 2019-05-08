import { createSelector } from 'reselect';

export const getSearchText = createSelector(
    state => state.search.searchText, searchText => searchText
);

export const getSearchItems = createSelector(
    state => state.search.searchItems, searchItems => searchItems.map(x => ({...x, image: x.image && x.image.medium}))
);

export const getError = createSelector(
    state => state.search.error, error => error
);

export const getIsLoading = createSelector(
    state => state.search.isLoading, isLoading => isLoading
);