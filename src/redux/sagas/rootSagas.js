import { all } from "redux-saga/effects";
import { projectSagas } from "./projectSagas";

function* rootSagas() {
  yield console.log("Inside Root Saga");
  yield all([projectSagas()]);
}

export default rootSagas;
