import {
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
} from "./projects";

const Actions = {
  PROJECTS: {
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
  },
};

export default Actions;
