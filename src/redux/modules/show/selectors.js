import { createSelector } from 'reselect';
import { EMPTY_STRING } from '../../../constants';

const getShowData = state => {
  if (state.showReducer.show.cast) {
    const actorsDataOfShow = state.showReducer.show.cast.map(item => {
      return {
        name: item.person.name,
        image: item.person.image ? item.person.image.medium : EMPTY_STRING
      };
    });

    return { ...state.showReducer.show, cast: actorsDataOfShow };
  }

  return { ...state.showReducer.show };
};

const getLoadingState = state => state.showReducer.showLoading;

export const getShowSelector = createSelector(
  [getShowData],
  data => data
);

export const isLoadingShowSelector = createSelector(
  [getLoadingState],
  state => state
);
