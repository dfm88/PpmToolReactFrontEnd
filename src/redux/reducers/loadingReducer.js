import { PROJECTS } from "../constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case PROJECTS.LOAD_PROJECTS:
      return true;
    case PROJECTS.PROJECTS_LOADED_SUCCESS:
      return false;
    case PROJECTS.PROJECTS_LOADED_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
