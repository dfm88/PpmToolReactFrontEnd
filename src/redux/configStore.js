import { applyMiddleware, combineReducers, createStore } from "redux";
import projectReducer from "./ducks/projectsDuck";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSagas";

const reducer = combineReducers({
  projectReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

const store = createStore(
  reducer,
  window._REDUX_DEVTOOLs_EXTENSION__ && window.__REDUX_DEVTOOLs_EXTENSION_(),
  applyMiddleware(...middleWares)
);

//sagaMiddleware.run(watcherSaga)

export default store;
