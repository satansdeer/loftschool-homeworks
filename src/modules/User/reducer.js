import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// Обратите внимание на тесты, они помогут вам написать код редьюсера

import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './actions';

const data = handleActions(
  {
    [fetchUserRequest]: () => [],
    [fetchUserSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchUserRequest]: () => null,
    [fetchUserFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  data,
  isLoading,
  error
});
