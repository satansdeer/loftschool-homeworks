import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions.js';

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchRequest]: () => {},
    [fetchSuccess]: (state, action) => action.payload
  },
  {}
);

const error = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({ isLoading, error, data });

export const getIsLoading = state => state.user.isLoading;
export const getData = state => state.user.data;
export const getError = state => state.user.error;
// Обратите внимание на тесты, они помогут вам написать код редьюсера
