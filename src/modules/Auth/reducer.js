import { ADD_KEY } from './constants';
import { set, lensPath } from 'ramda';

const initialState = {
  apiKey: ''
};

const apiKeyLens = lensPath(['apiKey']);


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEY:
      return set(apiKeyLens, action.payload, state);

    default:
      return state;
  }
};

export default authReducer;
