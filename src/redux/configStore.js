import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { projectReducer } from "./ducks/projectsDuck";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSagas";
import rootSagas from "./sagas/rootSagas";

//nuovo
import rootReducer from "./reducers";

/*const reducer = combineReducers({
  projectReducer,
});*/

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSagas);

export default store;
