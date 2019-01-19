import { handleActions } from "redux-actions";
import { fetchShow, fetchRequest, fetchSuccess, fetchFailure } from "../actions";

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  showData: {}
};

const shows = handleActions({
  [fetchShow + fetchRequest]: () => {
    return {
      loading: true,
      loaded: false
    };
  },
  [fetchShow + fetchSuccess]: (_state, action) => {
    return {
      loading: false,
      loaded: true,
      showData: action.response
    };
  },
  [fetchShow + fetchFailure]: (_state, action) => {
    return {
      loading: false,
      error: action.error
    };
  }
}, initialState);

export default shows;