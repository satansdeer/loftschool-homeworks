import { createSelector } from 'reselect';
import { EMPTY_STRING } from '../../../constants';

const getShowData = state => {
  if (
    state.showReducer.showElements &&
    state.showReducer.showElements._embedded
  ) {
    const {
      _embedded: { cast }
    } = state.showReducer.showElements;

    const actorsDataOfShow = cast.map(({ person: { name, image } }) => {
      return {
        name,
        image: image ? image.medium : EMPTY_STRING
      };
    });

    return { ...state.showReducer.showElements, cast: actorsDataOfShow };
  }

  return { ...state.showReducer.showElements };
};

const getLoadingState = state => state.showReducer.isLoading;

export const getShowSelector = createSelector(
  [getShowData],
  data => data
);

export const isLoadingShowSelector = createSelector(
  [getLoadingState],
  state => state
);
