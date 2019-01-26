import { fork, select, takeLatest, put, call, take } from "redux-saga/effects";
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure, fetchPhotos, changeSol } from "./actions";
import { getPhotos } from "./api";

const names = ["curiosity", "opportunity", "spirit"];

function* fetchSearchData(action) {
  // const { rover } = action;
  try {
    for (let rover of names) {
      yield put({ type: fetchPhotosRequest.toString(), payload: rover });
      const { auth: { apiKey }, roverPhotos: { sol } } = yield select();
      const { photos } = yield call(getPhotos, apiKey, rover, sol.current);
      yield put({ type: fetchPhotosSuccess.toString(), payload: photos, rover });
    }
  } catch (error) {
    //yield put({ type: fetchPhotosFailure.toString(), payload: error, rover });
  }
}


export function* fetchFollowersFlow() {
  while (true) {
    const { payload } = yield take(changeSol);
    yield put({ type: changeSol.toString(), payload });
    yield call(fetchSearchData);
  }

}

function* fetchFollowersWatcher() {
  yield takeLatest(fetchPhotos, fetchSearchData);
}

export default function* () {
  yield fork(fetchFollowersWatcher);
  yield fork(fetchFollowersFlow);
}