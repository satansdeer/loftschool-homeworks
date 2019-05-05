import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey
const apiKey = handleActions(
  {
    [addApiKey]: (_state, action) => action.payload
  },
  null
);

const isAuthorized = handleActions(
  {
    [addApiKey]: () => true
  },
  false
);

export default combineReducers({
  apiKey,
  isAuthorized
});
