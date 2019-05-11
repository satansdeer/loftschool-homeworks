import { ADD_KEY } from './constants';

const initialState = {
  apiKey: null
};

// ad9fKgG7xLF2EuVP20f9s5bOMZlAiE5r62GqmQWH

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEY:
      return { ...state, apiKey: action.payload };

    default:
      return state;
  }
};

export default authReducer;
