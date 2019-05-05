import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from '../actions';

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

const error = handleActions(
  {
    [showRequest]: () => null,
    [showFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  showElements,
  isLoading,
  error
});
