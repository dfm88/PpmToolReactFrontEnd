import { PROJECTS } from "../constants";

const loadProjectAction = () => ({
  type: PROJECTS.LOAD_PROJECTS,
});

const projectLoadedSuccessAction = (projects) => ({
  type: PROJECTS.PROJECTS_LOADED_SUCCESS,
  projects,
});

const projectLoadedFailAction = (errors) => ({
  type: PROJECTS.PROJECTS_LOADED_FAIL,
  errors,
});

const loadOneProjectAction = (projectIdentifier, history) => ({
  type: PROJECTS.LOAD_ONE_PROJECT,
  projectIdentifier,
  history,
});

const projectOneLoadedSuccessAction = (project) => ({
  type: PROJECTS.PROJECT_ONE_LOADED_SUCCESS,
  project,
});

const projectOneLoadedFailAction = (errors) => ({
  type: PROJECTS.PROJECT_ONE_LOADED_FAIL,
  errors,
});

const addProjectAction = (project, history) => ({
  type: PROJECTS.ADD_PROJECT,
  project,
  history,
});

const projectAddedSuccessAction = (proj) => ({
  type: PROJECTS.PROJECT_ADDED_SUCCESS,
  proj,
});

const projectAddedFailAction = (errors) => ({
  type: PROJECTS.PROJECT_ADDED_FAIL,
  errors,
});

const deleteProjectAction = (projectIdentifier) => {
  console.log("deleteProjActionCALLED");
  return {
    type: PROJECTS.DELETE_PROJECT,
    projectIdentifier,
  };
};

const deleteProjectSuccessAction = (projectIdentifier) => ({
  type: PROJECTS.PROJECT_DELETED_SUCCESS,
  projectIdentifier,
});

export {
  loadProjectAction,
  projectLoadedSuccessAction,
  projectLoadedFailAction,
  addProjectAction,
  projectAddedSuccessAction,
  projectAddedFailAction,
  loadOneProjectAction,
  projectOneLoadedSuccessAction,
  projectOneLoadedFailAction,
  deleteProjectAction,
  deleteProjectSuccessAction,
};
