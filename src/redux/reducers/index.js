import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import projectsReducer from "./projectsReducer";
import errorsReducer from "./errorsReducer";

const rootReducers = combineReducers({
  loadingReducer,
  projectsReducer,
  errorsReducer,
});

export default rootReducers;
