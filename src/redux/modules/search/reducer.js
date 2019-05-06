import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchRequest, searchSuccess, searchFailure } from './actions';

const series = handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

export default combineReducers({
  series,
  isLoading
});
