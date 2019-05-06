import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getUserInfo } from './api';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './actions';
import { getApiKey } from '../Auth/selectors';

function* fetchUserWatcher() {
  yield takeLatest(fetchUserRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const state = yield select(getApiKey);

  try {
    const response = yield call(getUserInfo, state, action.payload);
    yield put(fetchUserSuccess(response));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
