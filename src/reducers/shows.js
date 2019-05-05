import { showRequest, showSuccess, showFailure } from '../middlewares/actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

const isFetching = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

const result = handleActions(
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
  result,
  isFetching,
  error
});

export const getResult = createSelector(
  state => state.shows.result,
  result => result
);

export const getIsFetching = state => state.shows.isFetching;
export const getError = state => state.shows.error;
