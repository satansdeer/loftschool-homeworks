import { createSelector } from 'reselect';

const solSelector = state => state.sol;
const photosSelector = state => state.photos;

export const getSol = createSelector(
  [solSelector],
  sol => sol
);

export const getRoverPhotos = createSelector(
  [photosSelector],
  photos => photos
);
