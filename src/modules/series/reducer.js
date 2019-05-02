import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchSeriesRequest,
  fetchSeriesSuccess,
  fetchSeriesFailure,
} from './actions';

const elements = handleActions(
  {
    [fetchSeriesRequest]: () => [],
    [fetchSeriesSuccess]: (_state, action) => action.payload,
  },
  [],
);

const isLoading = handleActions(
  {
    [fetchSeriesRequest]: () => true,
    [fetchSeriesSuccess]: () => false,
    [fetchSeriesFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [fetchSeriesRequest]: () => null,
    [fetchSeriesFailure]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  elements,
  isLoading,
  error,
});