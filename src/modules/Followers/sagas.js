import { takeLatest, select, put, call, fork } from "redux-saga/effects";
import { fetchFollowers, request, success, failure } from "./actions";
import { getFollowersInfo } from "./api";

function* fetchSearchData(key, action) {
  const { type, payload } = action;
  try {
    yield put({ type: `${type}${request}` });
    const response = yield call(getFollowersInfo, key, payload);
    yield put({ type: `${type}${success}`, response });
  } catch (error) {
    yield put({ type: `${type}${failure}`, error });
  }
}

function* fetchFollowersWatcher() {
  yield takeLatest(fetchFollowers, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
  const { payload: { auth } } = yield select(fetchFollowers);
  yield fork(fetchSearchData, auth.apiKey, action);
}

export default function* () {
  yield fork(fetchFollowersWatcher);
}