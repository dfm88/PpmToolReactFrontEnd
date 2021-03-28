import { PROJECTS } from "../constants";

const initialState = {
  errors: {},
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS.PROJECTS_LOADED_FAIL:
      return action.errors;
    case PROJECTS.LOAD_PROJECTS:
    case PROJECTS.PROJECTS_LOADED_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorsReducer;
