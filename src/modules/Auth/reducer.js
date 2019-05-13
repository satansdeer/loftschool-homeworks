import {addKey} from './actions';
import {createSelector} from 'reselect';

const initialState = {
  apiKey: 'ImCRVrGVYgq3xikBIPyHRipuIeFlSpwQbULcRmc8'
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case addKey.toString():
      return state;
    default:
      return state;
  }
};

const apiKeySelector = state => state.apiKey;

export const getIsAuthorized = createSelector(
  [apiKeySelector],
  key => key
);

export default authReducer;
