// Реализуйте саги
import { takeEvery, fork, call, put, select } from 'redux-saga/effects';
import {
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from '../RoverPhotos';
import { getApiKey } from '../Auth';
import { getPhotos } from './api';
function* fetchPhotosWatcher() {
  yield takeEvery(fetchPhotosRequest, fetchPhotosFlow);
}

export function* fetchPhotosFlow(action) {
  try {
    const { name, sol } = action.payload;
    const apiKey = yield select(getApiKey);
    const response = yield call(getPhotos, apiKey, name, sol);
    yield put(fetchPhotosSuccess({ ...response, name, sol }));
  } catch (error) {
    yield put(fetchPhotosFailure(error));
  }
}

export default function*() {
  yield fork(fetchPhotosWatcher);
}
