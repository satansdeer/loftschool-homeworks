import { takeEvery } from 'redux-saga/effects';
import { roverSagas } from '../modules/RoverPhotos';
import { fetchPhotosRequest } from '../modules/RoverPhotos';

function* rootSaga() {
  yield takeEvery(fetchPhotosRequest, roverSagas);
}

export default rootSaga;
