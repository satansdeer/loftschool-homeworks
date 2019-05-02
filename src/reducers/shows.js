import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { showRequest, showSuccess, showFailure } from '../actions';

const isFetching = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

const entities = handleActions(
  {
    [showRequest]: () => [],
    [showSuccess]: (state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [showRequest]: () => null,
    [showFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  entities,
  error
});

export const getEntities = createSelector(
  state => state.shows.entities,
  entities => {
    const { id, name, image, summary, _embedded } = entities;
    return {
      id,
      name,
      image,
      summary,
      embedded: _embedded
    };
  }
);

export const getIsFetching = state => state.shows.isFetching;
export const getError = state => state.shows.error;
