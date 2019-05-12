import { ADD_KEY } from './constants';
import { set, lensPath } from 'ramda';

const initialState = {
  apiKey: 'nYaPlqtaCAn5ZiwWR9XHKFeJQDPeGSjx3ZMDfgWG'
};

const apiKeyLens = lensPath(['apiKey']);

// ad9fKgG7xLF2EuVP20f9s5bOMZlAiE5r62GqmQWH

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEY:
      return set(apiKeyLens, action.payload, state);

    default:
      return state;
  }
};

export default authReducer;
