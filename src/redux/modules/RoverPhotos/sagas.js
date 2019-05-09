import { call, put, all } from 'redux-saga/effects';
import { fetchPhotosSuccess, fetchPhotosFailure } from './actions';
import { getPhotos } from '../../../services/api';
import roversConfig from '../../../rovers.json';

export function* roverSaga(action) {
  const { apiKey, sol } = action.payload;
  yield call(sagaDataFetcher, sol, apiKey);
}

function* sagaDataFetcher(sol, key) {
  console.log('sagaDataFetcher', sol, key);

  try {
    const [curiosityPhotos, opportunityPhotos, spiritPhotos] = yield all([
      yield call(getPhotos, key, roversConfig.items[0], sol),

      yield call(getPhotos, key, roversConfig.items[1], sol),

      yield call(getPhotos, key, roversConfig.items[2], sol)
    ]);

    console.log('get response', [
      curiosityPhotos,
      opportunityPhotos,
      spiritPhotos
    ]);

    yield put(fetchPhotosSuccess(curiosityPhotos, roversConfig.items[0]));
    yield put(fetchPhotosSuccess(opportunityPhotos, roversConfig.items[1]));
    yield put(fetchPhotosSuccess(spiritPhotos, roversConfig.items[2]));
  } catch (error) {
    yield put(fetchPhotosFailure(error));
  }
}

export function* changeSolSaga(action) {
  const { sol, apiKey } = action.payload;
  yield call(sagaDataFetcher, sol, apiKey);
}
