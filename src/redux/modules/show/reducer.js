import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from './actions';

const showElements = handleActions(
  {
    [showRequest]: () => [],
    [showSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

export default combineReducers({
  showElements,
  isLoading
});
