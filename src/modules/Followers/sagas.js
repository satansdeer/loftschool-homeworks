import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
  try {
    const apiKey = yield select(getApiKey);
    const res = yield call(getFollowersInfo, apiKey, action.payload);
    yield put(fetchSuccess(res));
  } catch (e) {
    yield put(fetchFailure(e));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
