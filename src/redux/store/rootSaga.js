import { takeEvery } from 'redux-saga/effects';
import { roverSaga } from '../modules/RoverPhotos';
import { FETCH_PHOTOS_REQUEST } from '../modules/RoverPhotos';

function* rootSaga() {
  yield takeEvery(FETCH_PHOTOS_REQUEST, roverSaga);
}

export default rootSaga;
