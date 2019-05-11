import { takeEvery, select, put, call, fork } from 'redux-saga/effects';
import { getPhotos } from './api';
import { getApiKey } from '../Auth';
import { getSavedPhotos, rovers } from './RoverPhotos';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';

function* changeSolFlow(action) {
  for (const name of rovers) {
    const photos = yield select(getSavedPhotos, name, action.payload);

    if (!photos) {
      yield put(fetchPhotosRequest({ name, sol: action.payload }));
    }
  }
}

function* changeSolWatcher() {
  yield takeEvery(changeSol, changeSolFlow);
}

function* fetchPhotoFlow(action) {
  const { sol, name } = action.payload;
  const apiKey = yield select(getApiKey);

  try {
    const { photos } = yield call(getPhotos, apiKey, name, sol);
    yield put(fetchPhotosSuccess({ name, sol, photos }));
  } catch (error) {
    yield put(fetchPhotosFailure(sol, name, error));
  }
}

function* fetchRoverWatcher() {
  yield takeEvery(fetchPhotosRequest, fetchPhotoFlow);
}

export default function*() {
  yield fork(changeSolWatcher);
  yield fork(fetchRoverWatcher);
}
