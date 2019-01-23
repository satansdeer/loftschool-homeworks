import { takeLatest, select, put, call, fork } from "redux-saga/effects";
import { fetchUser, request, success, failure } from "./actions";
import { getUserInfo } from "./api";

function* fetchSearchData(key, action) {
  const { type, payload } = action;
  try {
    yield put({ type: `${type}${request}` });
    const response = yield call(getUserInfo, key, payload);
    yield put({ type: `${type}${success}`, response });
  } catch (error) {
    yield put({ type: `${type}${failure}`, error });
  }
}

export function* fetchUserFlow(action) {
  const { payload: { auth } } = yield select(fetchUser);
  yield fork(fetchSearchData, auth.apiKey, action);
}

function* fetchUserWatcher() {
  yield takeLatest(fetchUser, fetchUserFlow);
}


export default function* () {
  yield fork(fetchUserWatcher);
}