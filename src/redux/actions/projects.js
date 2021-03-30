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

const addProjectAction = (project) => ({
  type: PROJECTS.ADD_PROJECT,
  project,
});

const projectAddedSuccessAction = (proj) => ({
  type: PROJECTS.PROJECT_ADDED_SUCCESS,
  proj,
});

const projectAddedFailAction = (errors) => ({
  type: PROJECTS.PROJECT_ADDED_FAIL,
  errors,
});

export {
  loadProjectAction,
  projectLoadedSuccessAction,
  projectLoadedFailAction,
};
