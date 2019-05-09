import { call, put } from 'redux-saga/effects';
import { fetchPhotosSuccess, fetchPhotosFailure } from './actions';
import { getPhotos } from '../../../services/api';

// Реализуйте саги
export function* roverSagas() {
  const result = yield call(
    getPhotos,
    'nYaPlqtaCAn5ZiwWR9XHKFeJQDPeGSjx3ZMDfgWG'
  );

  console.log('result', result);

  yield put(fetchPhotosSuccess(result.photos));
}
