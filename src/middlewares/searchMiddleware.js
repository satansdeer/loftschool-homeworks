import { fork, put, call, take } from "redux-saga/effects";
import { fetchSearch, fetchShow, fetchRequest, fetchSuccess, fetchFailure } from "../actions";
import { search, show } from "../api";

function* fetchSearchData(action, callback) {
  const { type, payload } = action;
  try {
    yield put({ type: `${type}${fetchRequest}` });
    const response = yield call(callback, payload);
    yield put({ type: `${type}${fetchSuccess}`, response });
  } catch (error) {
    yield put({ type: `${type}${fetchFailure}`, error });
  }
}

function* fetchWatch() {
  while (true) {
    const searchAction = yield take(fetchSearch);
    yield fork(fetchSearchData, searchAction, search);
  }
}

function* ShowWatch() {
  while (true) {
    const showAction = yield take(fetchShow);
    yield fork(fetchSearchData, showAction, show);
  }
}

export default function* rootSaga() {
  yield fork(fetchWatch);
  yield fork(ShowWatch);
};