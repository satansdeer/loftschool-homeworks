import { handleActions } from 'redux-actions';
import {addApiKey} from './actions';

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getApiKey = state => state.auth.apiKey;

const auth = handleActions(
    {
      [addApiKey]: (state, action) => ({
        apiKey:action.payload,
        isAuthorized: true
      })},
    { apiKey:'', isAuthorized:false }
  );
  

  export default auth;