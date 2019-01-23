import { fetchFollowers, request, success, failure } from "./actions";

const initialState = {
  isLoading: false,
  data: null,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload, response } = action;
  switch (type) {
    case `${fetchFollowers.toString()}${request.toString()}`:
      return {
        ...state,
        isLoading: true
      };
    case `${fetchFollowers.toString()}${success.toString()}`:
      return {
        ...state,
        isLoading: false,
        data: response
      };
    case `${fetchFollowers.toString()}${failure.toString()}`:
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