import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";
import { projectsLoadedAction } from "../../redux/ducks/projectsDuck";
import { LOAD_PROJECTS } from "../ducks/projectsDuck";
import * as api from "../../API/api";

/******  WORKER SAGA  *********/
function* loadProjectsWorker() {
  try {
    const projects = yield call(api.getProjects);
    yield put(projectsLoadedAction(projects));
  } catch (e) {
    console.log("ERRORE IN loadProjectsWorker", e);
  }
}

/******  WATCHER SAGA  *********/
function* loadProjectsWatcher() {
  yield takeEvery(LOAD_PROJECTS, loadProjectsWorker);
}
