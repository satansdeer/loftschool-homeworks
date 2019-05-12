import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const getSol = createSelector(
  state => state.roverPhotos.sol.current,
  current => current
);

export const getPhotos = createSelector(
  state => state.roverPhotos.photos,
  photos => memoize((roverName, sol) => photos[roverName][sol])
);

export const getError = createSelector(
  state => state.roverPhotos.error,
  error => memoize((roverName) => error[roverName]['error'])
);