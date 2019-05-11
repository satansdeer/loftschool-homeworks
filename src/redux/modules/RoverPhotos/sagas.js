import { call, put, all } from 'redux-saga/effects';
import { fetchPhotosSuccess, fetchPhotosFailure } from './actions';
import { getPhotos } from '../../../services/api';
import roversConfig from '../../../rovers.json';

export function* roverSaga(action) {
  const { apiKey, sol, name } = action.payload;
  yield call(sagaDataFetcher, sol, apiKey, name);
}

function* sagaDataFetcher(sol, key, name) {
  console.log('sagaDataFetcher get request', sol, key, name);

  try {
    const result = yield call(getPhotos, key, name, sol);

    console.log('get response', result);

    yield put(fetchPhotosSuccess(result.photos, name, sol));
  } catch (error) {
    yield put(fetchPhotosFailure(error));
  }
}
