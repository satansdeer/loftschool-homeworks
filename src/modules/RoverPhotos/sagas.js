import { take, takeEvery, fork, call, select, put } from 'redux-saga/effects';
import { addKey } from '../Auth';
import { getPhotos } from './api';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';
import { getIsLoadingPhotos, getRovers, getSelectedSol } from './RoverPhotos';

function* photosFlow() {
  const { payload: key } = yield take(addKey);
  const rovers = yield select(getRovers);

  while (true) {
    const sol = yield select(getSelectedSol);
    for (let name of rovers) {
      const isRoverHasPhotos = yield select(state =>
        getIsLoadingPhotos(state, name, sol)
      );
      if (!isRoverHasPhotos) yield put(fetchPhotosRequest({ key, name, sol }));
    }
    yield take(changeSol);
  }
}

function* fetchPhoto({ payload: { key, name, sol } }) {
  try {
    const { photos } = yield call(getPhotos, key, name, sol);
    const cleanedPhotos = photos.map(({ id, img_src, camera }) => ({
      id,
      img_src,
      camera
    }));
    yield put(fetchPhotosSuccess({ name, sol, photos: cleanedPhotos }));
  } catch (error) {
    yield put(fetchPhotosFailure({ name, sol, error }));
  }
}

export default function*() {
  yield fork(photosFlow);
  yield takeEvery(fetchPhotosRequest, fetchPhoto);
}
