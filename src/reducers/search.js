import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchSearchRequest,
  fetchSearchSuccess,
  fetchSearchFailure
} from '../actions';

const searchText = handleActions(
  {
    [fetchSearchRequest]: (state, action) => action.payload
  },
  ''
);

const searchItems = handleActions(
  {
    [fetchSearchRequest]: () => [],
    [fetchSearchSuccess]: (state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [fetchSearchRequest]: () => true,
    [fetchSearchSuccess]: () => false,
    [fetchSearchFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchSearchFailure]: (state, action) => action.payload
  },
  ''
);

export default combineReducers({ searchText, searchItems, isLoading, error });
