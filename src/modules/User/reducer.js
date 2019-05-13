import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

// Обратите внимание на тесты, они помогут вам написать код редьюсера
const data = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchSuccess]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
);

export default combineReducers({
  data,
  isLoading
});

export const getData = state => state.user.data;
export const getIsLoading = state => state.user.isLoading;
