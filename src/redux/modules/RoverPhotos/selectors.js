import { createSelector } from 'reselect';

const solSelector = state => state.roverPhotosReducer.sol;
const photosSelector = state => state.roverPhotosReducer.photos;

export const getSol = createSelector(
  [solSelector],
  sol => sol
);

export const getRoverPhotos = createSelector(
  [photosSelector],
  photos => photos
);
