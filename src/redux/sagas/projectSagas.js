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

function* addProjectWorker(dati) {
  const parametri = [dati.project, dati.history];
  const progetto = yield call(api.addProject, ...parametri);
  try {
    console.log("Progetto ADDED1 ricevuti in projectSaga", parametri);

    console.log("Progetto ADDED2 ricevuti in projectSaga", progetto);
    yield put(Actions.PROJECTS.projectAddedSuccessAction(progetto.data));
  } catch (e) {
    console.log("ERRORE IN addProjectsWorker", e);
    console.log("ERRORE -> DATI RICEVUTI IN addProjectsWorker", progetto);
  }
}

/******  WATCHER SAGA  *********/
function* loadProjectsWatcher() {
  yield takeEvery(PROJECTS.LOAD_PROJECTS, loadProjectsWorker);
}

function* addProjectWatcher() {
  yield takeLatest(PROJECTS.ADD_PROJECT, addProjectWorker);
}

//Export
export function* projectSagas() {
  yield all([loadProjectsWatcher(), addProjectWatcher()]);
}
