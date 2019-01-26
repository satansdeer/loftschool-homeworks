import { addKey } from "./actions";

const initialState = {
  apiKey: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case addKey.toString():
      return {
        ...state,
        apiKey: payload
      };
    default: {
      return state;
    }
  }
}