import { showRequest, showSuccess, showFailure } from '../actions';
import { handleActions } from 'redux-actions';

const shows = handleActions(
  {
    [showRequest]: (_, action) => {
      return {
        isFetching: true,
        show: '',
        error: ''
      };
    },
    [showSuccess]: (_, action) => {
      return {
        isFetching: false,
        show: action.payload,
        error: ''
      };
    },
    [showFailure]: (_, action) => {
      return {
        isFetching: false,
        show: '',
        error: action.payload
      };
    }
  },
  { isFetching: false, show: '', error: '' }
);
export default shows;
