// Реализуйте редьюсер
import { handleActions } from 'redux-actions';
import { addKey } from './actions';

export const getApiKey = state => state.auth.apiKey;
export const getIsAuthorized = state => !!state.auth.apiKey;

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
