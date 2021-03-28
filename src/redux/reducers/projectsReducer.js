import { PROJECTS } from "../constants";

const initialState = {
  projects: [
    {
      projectName: "progetto finale",
      projectIdentifier: "ID001",
      description: "il mio ultimo progetto per l Uni",
      start_date: new Date(2021, 11, 2),
      end_date: new Date(2021, 11, 21),
    },
    {
      projectName: "Prov BG",
      projectIdentifier: "ID002",
      description: "gestione delle segnalazioni della Prov di BG",
      start_date: new Date(2020, 8, 4),
      end_date: new Date(2020, 9, 1),
    },
    {
      projectName: "PPM Tool",
      projectIdentifier: "ID003",
      description: "progetto per la gestione di task",
      start_date: new Date(2019, 7, 5),
      end_date: new Date(2019, 9, 29),
    },
  ],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS.PROJECTS_LOADED_SUCCESS:
      return [...state.projects, ...action.projects];
    default:
      return state;
  }
};

export default projectsReducer;