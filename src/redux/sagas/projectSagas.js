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

function* loadProjectOneWorker(dati) {
  var parametri = null;
  var progetto = null;
  try {
    console.log("Parametro ricevuto in LoadOneProgectWorker ONE", dati);
    parametri = [dati.projectIdentifier, dati.history];
    const projectOne = yield call(api.getProjectOne, ...parametri);
    console.log("Progetto ONE ricevuti in projectSaga", projectOne.data);
    yield put(Actions.PROJECTS.projectOneLoadedSuccessAction(projectOne.data));
  } catch (e) {
    console.log("ERRORE IN ONE loadProjectsWorker", e);
  }
}

function* addProjectWorker(dati) {
  var parametri = null;
  var progetto = null;
  try {
    parametri = [dati.project, dati.history];
    progetto = yield call(api.addProject, ...parametri);
    console.log("Progetto ADDED1 ricevuti in projectSaga", parametri);
    if (progetto.status >= 400) {
      throw new Error(progetto);
    }

    console.log("Progetto ADDED2 ricevuti in projectSaga", progetto);
    yield put(Actions.PROJECTS.projectAddedSuccessAction(progetto.data));
  } catch (e) {
    yield put(Actions.PROJECTS.projectAddedFailAction(progetto.data));
    console.log("ERRORE IN addProjectsWorker", progetto);
    console.log("ERRORE IN addProjectsWorker RISP");
    console.log("ERRORE -> DATI RICEVUTI IN addProjectsWorker", progetto);
  }
}

/******  WATCHER SAGA  *********/
function* loadProjectsWatcher() {
  yield takeEvery(PROJECTS.LOAD_PROJECTS, loadProjectsWorker);
}

function* loadProjectOneWatcher() {
  yield takeEvery(PROJECTS.LOAD_ONE_PROJECT, loadProjectOneWorker);
}

function* addProjectWatcher() {
  yield takeLatest(PROJECTS.ADD_PROJECT, addProjectWorker);
}

//Export
export function* projectSagas() {
  yield all([
    loadProjectsWatcher(),
    loadProjectOneWatcher(),
    addProjectWatcher(),
  ]);
}
