/******** CONSTANTS ********/

export const LOAD_PROJECTS = "LOAD_PROJECTS";
export const PROJECTS_LOADED = "PROJECTS_LOADED";

const initialState = {
  projects: []
};

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

/******** REDUCERS ********/

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return { ...state, projects: state.projects };
    default:
      return state;
  }
};
