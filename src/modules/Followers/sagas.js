import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getFollowersInfo } from './api.js';
import { getApiKey } from '../Auth/reducer.js';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions.js';
import { eventChannel } from 'redux-saga';
//ВЕрнуться к этому
//https://medium.com/@gvme_spb/redux-saga-eventchannel-вкратце-на-простом-примере-35021ca75e5a

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest.toString(), fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey);
  try {
    const payload = yield call(getFollowersInfo, apiKey, action.payload);

    yield put(fetchSuccess(payload));
  } catch (error) {
    yield put(fetchFailure(error));
  }
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
