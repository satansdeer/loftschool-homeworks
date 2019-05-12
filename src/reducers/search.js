// import { handleActions } from 'redux-actions';
// import { searchRequest, requestSuccess } from "../middlewares/actions";


// const search = handleActions({
//   [searchRequest]: () => [],
//   [requestSuccess]: (_state, action) => action.payload
// },[]);

// export default search;

import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from 'actions/search';
import { combineReducers } from 'redux';

const isFetching = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

const result = handleActions(
  {
    [searchSuccess]: (state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [searchFailure]: (state, action) => action.error
  },
  null
);

export default combineReducers({
  isFetching,
  result,
  error
});

export const getResult = state => state.search.result;
export const getError = state => state.search.error;
export const getIsFetching = state => state.search.isFetching;
