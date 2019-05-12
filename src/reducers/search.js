import { searchRequest, searchSuccess, searchFailure } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

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
    [searchRequest]: () => [],
    [searchSuccess]: (state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [searchRequest]: () => '',
    [searchFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  result,
  isFetching,
  error
});

export const getResult = state => state.search.result;
export const getIsFetching = state => state.search.isFetching;
export const getError = state => state.search.error;
