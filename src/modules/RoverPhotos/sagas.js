// Реализуйте саги
import {call, put} from 'redux-saga/effects';
import {fetchPhotosSuccess, fetchPhotosFailure} from './actions';
import {getPhotos} from './api';

export function* roverSaga(action) {
  const {apiKey, sol, name} = action.payload;
  yield call(fetchData, sol, name, apiKey);
}

function* fetchData(sol, name, key) {
  try {
    const result = yield call(getPhotos, key, name, sol);
    yield put(fetchPhotosSuccess(result.photos, name, sol));
  } catch (error) {
    yield put(fetchPhotosFailure(error));
  }
}
