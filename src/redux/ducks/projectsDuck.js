/***************************/
/******** CONSTANTS ********/

export const LOAD_PROJECTS = "LOAD_PROJECTS";
export const PROJECTS_LOADED = "PROJECTS_LOADED";
export const GET_ERRORS = "GET_ERRORS";

const initialState = {
  projects: [],
  errors: {}
};

/*************************/
/******** ACTIONS ********/

export const loadProjectsAction = () => {
  return {
    type: LOAD_PROJECTS
  };
};

export const projectsLoadedAction = (projects) => {
  return {
    type: PROJECTS_LOADED,
    projects
  };
};

//-------------

export const loadErrorsAction = () => {
  return {
    type: GET_ERRORS
  };
};

export const errorssLoadedAction = (projects, history) => {
  return {
    type: PROJECTS_LOADED,
    projects
  };
};

/**************************/
/******** REDUCERS ********/

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return { ...state, projects: state.projects };
    case GET_ERRORS:
      return { ...state, errors: state.errors };
    default:
      return state;
  }
};

//------------
