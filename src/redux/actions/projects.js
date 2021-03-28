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

export {
  loadProjectAction,
  projectLoadedSuccessAction,
  projectLoadedFailAction,
};
