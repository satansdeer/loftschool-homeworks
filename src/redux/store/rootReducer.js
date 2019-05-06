import { combineReducers } from 'redux';
import searchReducer from '../modules/search';
import showReducer from '../modules/show';

export default combineReducers({
  searchReducer,
  showReducer
});
