import { takeLatest, select, put, call, fork } from 'redux-saga/effects';


function* fetchFollowersWatcher() {
  yield takeLatest(?, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
