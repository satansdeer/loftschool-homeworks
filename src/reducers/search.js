import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { searchRequest, searchSuccess, searchFailure } from '../actions';

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
    [searchSuccess]: (_, action) => action.payload
  },
  []
);
const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchFailure]: (_, action) => action.error
  },
  null
);

export default combineReducers({
  result,
  isFetching,
  error
});

export const getResult = createSelector(
  state => state.search.result,
  result =>
    result.map(({ id, name, image, summary }) => ({ id, name, image, summary }))
);
export const getIsFetching = state => state.search.isFetching;
export const getError = state => state.search.error;
