import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import {getFollowersInfo} from './api';
import {getApiKey} from '../../modules/Auth/reducer'


function* fetchFollowersWatcher() {
  yield takeLatest('FOLLOWERS/FETCH_REQUEST', fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  const key = yield select(getApiKey);
  try {;
    const data = yield call(getFollowersInfo,key,action.payload)
    yield put({type: 'FOLLOWERS/FETCH_SUCCESS', payload:data})
 } catch (error) {
    yield put({type: 'FOLLOWERS/FETCH_FAILURE', error})
 }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
