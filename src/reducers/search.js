import { searchRequest, searchSuccess, searchFailure } from '../actions';
import { handleActions } from 'redux-actions';

const search = handleActions(
  {
    [searchRequest]: (_, action) => {
      return {
        isFetching: true,
        data: '',
        error: ''
      };
    },
    [searchSuccess]: (_, action) => {
      return {
        isFetching: false,
        data: action.payload,
        error: ''
      };
    },
    [searchFailure]: (_, action) => ({
      isFetching: false,
      data: '',
      error: action.payload
    })
  },
  { isFetching: false, data: '', error: '' }
);

export default search;
