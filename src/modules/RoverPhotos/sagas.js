// Реализуйте саги

import { takeEvery, put, call, fork } from 'redux-saga/effects';
import {getPhotos} from './api';


function* fetchPhotossWatcher() {
  yield takeEvery('ROVER_PHOTOS/FETCH_PHOTOS_REQUEST', fetchPhotosFlow);
}

export function* fetchPhotosFlow(action) {
  const {key, name, sol} = action.payload;
  try {
    const data = yield call(getPhotos,key,name,sol)
    const payload = {name, sol, photos: data.photos};
    yield put({type: 'ROVER_PHOTOS/FETCH_PHOTOS_SUCCESS', payload})
 } catch (error) {
    yield put({type: 'ROVER_PHOTOS/FETCH_PHOTOS_FAILURE', error})
 }
}

export default function*() {
  yield fork(fetchPhotossWatcher);
}