import { fetchUser, success, failure, request } from "./actions";

const initialState = {
  isLoading: false,
  data: null,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload, response } = action;
  switch (type) {
    case `${fetchUser.toString()}${request.toString()}`:
      return {
        ...state,
        isLoading: true
      };
    case `${fetchUser.toString()}${success.toString()}`:
      return {
        ...state,
        isLoading: false,
        data: response
      };
    case `${fetchUser.toString()}${failure.toString()}`:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default: {
      return state;
    }
  }
}