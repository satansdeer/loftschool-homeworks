import { ADD_KEY } from './constants';

const initialState = {
  apiKey: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEY:
      return { ...state, apiKey: action.payload };

    default:
      return state;
  }
};

export default authReducer;
