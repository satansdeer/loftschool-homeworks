import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '.././actions';

const search = handleActions(
  {
    [searchRequest]: (state, action) => ({
      series: [],
      error: '',
      isFetching: true
    }),

    [searchSuccess]: (state, action) => ({
      isFetching: false,
      error: '',
      series: action.payload
    }),

    [searchFailure]: (state, action) => ({
      series: [],
      isFetching: false,
      error: action.payload
    })
  },
  { series: [], isFetching: false, error: '' }
);

export default search;
