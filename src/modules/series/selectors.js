import { createSelector } from 'reselect';

export const getIsFetching = state => state.series.isFetching;
export const getError = state => state.series.error;
export const getSeriesImages = createSelector(
  state => state.series.elements,
  elements =>
    elements.map(({ id, image: { original }, name }) => ({
      id,
      image: original,
      name,
    })),
);