import { fork, select, takeLatest, put, call, take } from "redux-saga/effects";
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure, fetchPhotos, changeSol } from "./actions";
import { getPhotos } from "./api";

const names = ["curiosity", "opportunity", "spirit"];
let rover = "";

function* fetchSearchData() {
  try {
    for (let roverName of names) {
      rover = roverName;
      yield put({ type: fetchPhotosRequest.toString(), payload: roverName });
      const { auth: { apiKey }, roverPhotos: { sol } } = yield select();
      const { photos } = yield call(getPhotos, apiKey, roverName, sol.current);
      yield put({ type: fetchPhotosSuccess.toString(), payload: photos, rover: roverName });
    }
  } catch (error) {
    yield put({ type: fetchPhotosFailure.toString(), payload: error, rover });
  }
}


export function* fetchFollowersFlow() {
  while (true) {
    yield take(changeSol);
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