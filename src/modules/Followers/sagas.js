import { getFollowersInfo } from './api';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './actions';
import { getApiKey } from '../Auth/selectors';
import { takeLatest, select, put, call, fork } from 'redux-saga/effects';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersFlow);
  // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
  const state = yield select(getApiKey);

  try {
    const response = yield call(getFollowersInfo, state, action.payload);
    yield put(fetchFollowersSuccess(response));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
