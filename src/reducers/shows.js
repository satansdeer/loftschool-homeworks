// import { handleActions } from "redux-actions";
// import { showRequest, showRequestSuccess } from "../middlewares/actions";

// const shows = handleActions({
//   [showRequest]: () => [],
//   [showRequestSuccess]: (_state, action) => action.payload
// }, null);

// export default shows;

import { handleActions } from 'redux-actions';

import { showRequest, showSuccess, showFailure } from 'actions/show';
import { combineReducers } from 'redux';

const entities = handleActions(
  {
    [showSuccess]: (state, action) => appendUniq(state, [action.payload])
  },
  []
);

const isFetching = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

export default combineReducers({
  entities,
  isFetching
});

export const getShows = state => state.shows.entities;
export const getShowById = (state, id) =>
  state.shows.entities.find(show => show.id === id);
export const getIsFetching = state => state.shows.isFetching;

function appendUniq(state, newData) {
  const uniq = newData.filter(
    data => state.find(e => e.id === data.id) == null
  );
  return [...state, ...uniq];
}
