import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";
import Actions from "../actions/index";
import { PROJECTS } from "../constants/index";
import * as api from "../../api/api";

/******  WORKER SAGA  *********/
function* loadProjectsWorker() {
  try {
    const projects = yield call(api.getProjects);
    console.log("Progetti ricevuti in projectSaga", projects.data);
    yield put(Actions.PROJECTS.projectLoadedSuccessAction(projects.data));
  } catch (e) {
    console.log("ERRORE IN loadProjectsWorker", e);
  }
}

/******  WATCHER SAGA  *********/
function* loadProjectsWatcher() {
  yield takeEvery(PROJECTS.LOAD_PROJECTS, loadProjectsWorker);
}

//Export
export function* projectSagas() {
  yield all([loadProjectsWatcher()]);
}
