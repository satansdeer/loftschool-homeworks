import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getUserInfo } from './api';
import { getApiKey } from '../Auth';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  try {
    const apiKey = yield select(getApiKey);
    const res = yield call(getUserInfo, apiKey, action.payload);
    yield put(fetchSuccess(res));
  } catch (e) {
    yield put(fetchFailure(e));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
