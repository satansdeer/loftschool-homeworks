import { takeEvery } from 'redux-saga/effects';
import { roverSaga } from '../RoverPhotos/index';
import { FETCH_PHOTOS_REQUEST } from '../RoverPhotos/index';

function* rootSaga() {
  yield takeEvery(FETCH_PHOTOS_REQUEST, roverSaga);
}

export default rootSaga;
