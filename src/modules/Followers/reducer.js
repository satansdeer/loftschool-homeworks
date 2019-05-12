import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер

const isLoading = handleActions({
  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchFailure]: () => false
}, false);

const data = handleActions({
  [fetchSuccess]: (state, action) => action.payload,
  [fetchFailure]: () => '',
}, '');

const error = handleActions({
  [fetchFailure]: (state, action) => action.payload,
  [fetchFailure]: () => '',
}, '');

export default combineReducers({ isLoading, data, error });
