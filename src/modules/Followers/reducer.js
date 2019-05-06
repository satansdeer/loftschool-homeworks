import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер

import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './actions';

const data = handleActions(
  {
    [fetchFollowersRequest]: () => [],
    [fetchFollowersSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchFollowersRequest]: () => null,
    [fetchFollowersFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  data,
  isLoading,
  error
});
