import { call, put } from 'redux-saga/effects';
import { fetchPhotosSuccess, fetchPhotosFailure } from './actions';
import { getPhotos } from './api';

export function* roverSaga(action) {
  const { apiKey, sol, name } = action.payload;
  yield call(sagaDataFetcher, sol, name, apiKey);
}

function* sagaDataFetcher(sol, name, key) {
  console.log('sagaDataFetcher get request', sol, key, name);

  try {
    const result = yield call(getPhotos, key, name, sol);

    console.log('get response', result);

    yield put(fetchPhotosSuccess(result.photos, name, sol));
  } catch (error) {
    yield put(fetchPhotosFailure(error));
  }
}
