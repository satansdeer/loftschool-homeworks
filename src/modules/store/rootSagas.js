import { takeEvery } from 'redux-saga/effects';
import { roverSaga } from '../RoverPhotos';
import { fetchPhotosRequest } from '../RoverPhotos';

function* rootSaga() {
  yield takeEvery(fetchPhotosRequest, roverSaga);
}

export default rootSaga;
