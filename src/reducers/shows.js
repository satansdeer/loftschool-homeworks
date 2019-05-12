import { showRequest, showSuccess, showFailure } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

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

export const getResult = state => state.shows.result;
export const getIsFetching = state => state.shows.isFetching;
export const getError = state => state.shows.error;
