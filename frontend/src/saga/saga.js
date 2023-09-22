import { call, put, all, takeEvery } from "redux-saga/effects";
import {
  GetAllMusic,
  UpdateMusic,
  DeleteMusic,
  DownloadMusic,
  SetMusics
} from "../store/slice/musicSlice";
import {
  fetch_Music,
  delete_Music,
  update_Music,
  download_Music
} from "./api/api";

function* sagaFunction() {
  yield all([
    takeEvery(GetAllMusic, fetchAllMusic),
    takeEvery(DeleteMusic, deleteMusic),
    takeEvery(UpdateMusic, updateMusic),
    takeEvery(DownloadMusic, downloadMusic)
  ]);
}

function* fetchAllMusic() {
  const musics = yield call(fetch_Music);
  yield put(SetMusics(musics));
}
function* deleteMusic(action) {
  yield call(delete_Music, action.payload);
  const musics = yield call(fetch_Music);
  yield put(GetAllMusic(musics));
}
function* updateMusic(action) {
  yield call(update_Music, action.payload);
  const musics = yield call(fetch_Music);
  yield put(GetAllMusic(musics));
}
function* downloadMusic(action) {
  yield call(download_Music, action.payload);
}

export default sagaFunction;
