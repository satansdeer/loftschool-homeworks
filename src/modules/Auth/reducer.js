import { addApiKey } from "./actions";

const initialState = {
  apiKey: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case addApiKey.toString():
      return {
        apiKey: payload
      };
    default: {
      return state;
    }
  }
}