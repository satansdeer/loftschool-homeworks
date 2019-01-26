import { createSelector } from "reselect";

const getRover = state => state.roverPhotos;

export const getRoverPhotos = createSelector(getRover, state => {
  const { photos } = state;
  return Object.keys(photos).reduce((prev, cur) => {
    prev.push({
      name: cur,
      photos: photos[cur].photos ? photos[cur].photos : []
    });
    return prev;
  }, []);
});
export const getSol = createSelector(getRover, state => state.sol);
export const getCurrent = createSelector(getSol, state => state.current);
export const getMax = createSelector(getSol, state => state.max);
export const getMin = createSelector(getSol, state => state.min);