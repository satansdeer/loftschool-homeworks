import { takeEvery } from 'redux-saga/effects';
import { roverSaga } from '../modules/RoverPhotos';
import { fetchPhotosRequest } from '../modules/RoverPhotos/actions';

export default function* rootSaga() {
  yield takeEvery(fetchPhotosRequest, roverSaga);
}
