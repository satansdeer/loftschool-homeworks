import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchFailure, fetchRequest, fetchSuccess } from './actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер
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
    [fetchRequest]: () => null,
    [fetchSuccess]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  isLoading,
  data
});

export const getIsLoading = state => state.followers.isLoading;
export const getData = state => state.followers.data;
