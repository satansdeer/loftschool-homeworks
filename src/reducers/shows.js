import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchShowsRequest,
  fetchShowsSuccess,
  fetchShowsFailure
} from '../actions';

const isLoading = handleActions(
  {
    [fetchShowsRequest]: () => true,
    [fetchShowsSuccess]: () => false,
    [fetchShowsFailure]: () => false
  },
  false
);

const shows = handleActions(
  {
    [fetchShowsSuccess]: (state, action) => [...state, action.payload]
  },
  []
);

const error = handleActions(
  {
    [fetchShowsFailure]: (state, action) => action.payload
  },
  ''
);

export default combineReducers({ isLoading, shows, error });
