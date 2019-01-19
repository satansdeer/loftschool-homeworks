import { handleActions } from "redux-actions";
import { fetchFailure, fetchRequest, fetchSearch, fetchSuccess } from "../actions";

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  data: []
};

const search = handleActions({
  [fetchSearch + fetchRequest]: () => {
    return {
      loading: true,
      loaded: false
    };
  },
  [fetchSearch + fetchSuccess]: (_state, action) => {
    return {
      loading: false,
      loaded: true,
      data: action.response
    };
  },
  [fetchSearch + fetchFailure]: (_state, action) => {
    const { error } = action;
    return {
      loading: false,
      error: `${error.name} - ${error.message}`
    };
  }
}, initialState);

export default search;