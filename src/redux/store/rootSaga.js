import { takeEvery } from 'redux-saga/effects';
import { roverSaga, changeSolSaga } from '../modules/RoverPhotos';
import { fetchPhotosRequest } from '../modules/RoverPhotos';
import { FETCH_PHOTOS_REQUEST, CHANGE_SOL } from '../modules/RoverPhotos';

function* rootSaga() {
  yield takeEvery(FETCH_PHOTOS_REQUEST, roverSaga);
  yield takeEvery(CHANGE_SOL, changeSolSaga);
}

export default rootSaga;
