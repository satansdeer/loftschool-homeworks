import { handleActions } from 'redux-actions';
import { showRequest, showSuccess, showFailure } from '.././actions';

const shows = handleActions(
  {
    [showRequest]: () => ({
      casts: {},
      error: '',
      isFetching: true
    }),

    [showSuccess]: (state, action) => ({
      isFetching: false,
      error: '',
      casts: action.payload
    }),

    [showFailure]: (state, action) => ({
      casts: {},
      isFetching: false,
      error: action.payload
    })
  },
  { casts: {}, isFetching: false, error: '' }
);

export default shows;
