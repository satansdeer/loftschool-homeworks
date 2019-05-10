import { handleActions } from 'redux-actions';
import { addKey } from './actions';

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getApiKey = state => state.auth.apiKey;

// Реализуйте редьюсер
const auth = handleActions(
  {
    [addKey]: (state, action) => ({
      apiKey: action.payload,
      isAuthorized: true
    })
  },
  { apiKey: '', isAuthorized: false }
);

export default auth;
