import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getUserInfo } from './api.js';
import { getApiKey } from '../Auth/reducer.js';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions.js';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest.toString(), fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey);
  try {
    const payload = yield call(getUserInfo, apiKey, action.payload);
    yield put(fetchSuccess(payload));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
