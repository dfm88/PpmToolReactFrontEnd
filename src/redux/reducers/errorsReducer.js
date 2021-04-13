import { PROJECTS } from "../constants";

const initialState = {};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    //PROJECTS FAIL
    case PROJECTS.PROJECTS_LOADED_FAIL:
      return action.errors;
    case PROJECTS.PROJECT_ADDED_FAIL:
      console.log("errorRedycer : ", state);
      console.log("errorRedycer1 : ", action);
      return action.errors;
    //PROJECTS OK
    case PROJECTS.LOAD_PROJECTS:
    case PROJECTS.PROJECTS_LOADED_SUCCESS:
      return {};
    case PROJECTS.PROJECT_ADDED_SUCCESS:
      return {};
    //PROJECT ONE FAIL
    case PROJECTS.PROJECT_ONE_LOADED_FAIL:
      console.log("errorRedycer22 : ", state);
      console.log("errorRedycer33 : ", action);
      return action.errors;
    //PROJECT ONE OK
    case PROJECTS.LOAD_ONE_PROJECT:
    case PROJECTS.PROJECT_ONE_LOADED_SUCCESS:
      return {};

    default:
      return state;
  }
};

export default errorsReducer;
