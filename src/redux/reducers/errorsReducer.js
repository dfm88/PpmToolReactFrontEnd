import { PROJECTS } from "../constants";

const initialState = {};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS.PROJECTS_LOADED_FAIL:
      return action.errors;
    case PROJECTS.PROJECT_ADDED_FAIL:
      console.log("errorRedycer : ", state);
      console.log("errorRedycer1 : ", action.errors.data.projectIdentifier);
      return action.errors;
    case PROJECTS.LOAD_PROJECTS:
    case PROJECTS.PROJECTS_LOADED_SUCCESS:
      return {};
    case PROJECTS.PROJECT_ADDED_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default errorsReducer;
