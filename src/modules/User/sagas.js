import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import {getUserInfo} from './api';
import {getApiKey} from '../../modules/Auth/reducer'

function* fetchUserWatcher() {
  yield takeLatest('USER/FETCH_REQUEST', fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const key = yield select(getApiKey);
  try {;
    const data = yield call(getUserInfo,key,action.payload)
    yield put({type: 'USER/FETCH_SUCCESS', payload:data})
 } catch (error) {
    yield put({type: 'USER/FETCH_FAILURE', error})
 }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
