import {addKey} from './actions';
import {createSelector} from 'reselect';

const initialState = {
  apiKey: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case addKey.toString():
      return {...state, apiKey: action.payload};
    default:
      return state;
  }
};

const apiKeySelector = state => state.authReducer.apiKey;

export const getIsAuthorized = createSelector(
  [apiKeySelector],
  key => key
);

export default authReducer;
