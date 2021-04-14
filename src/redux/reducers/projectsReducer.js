import { PROJECTS } from "../constants";

const initialState = {
  projects: [],
  project: {},
};
/*{
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
  },*/

const projectsReducer = (state = initialState, action) => {
  console.log("STATE INIZIALE PROJECT REDUCER", state);
  switch (action.type) {
    case PROJECTS.PROJECTS_LOADED_SUCCESS:
      console.log("stamnpa ricevuti in projectReducer - Load SUCCESS", state);
      console.log("stamnpa ACTION in projectReducer - Load SUCCESS", action);
      const stateFinaleALLloaded = { ...state, projects: action.projects };
      console.log(
        "STATO FINALE PROJECT REDUCER LOADED ALL ONE",
        stateFinaleALLloaded
      );
      return { ...state, projects: action.projects };

    case PROJECTS.PROJECT_ADDED_SUCCESS:
      console.log("stamnpa ricevuti in projectReducer - ADD SUCCESS", state);
      console.log("stamnpa ACTION in projectReducer - ADD SUCCESS", action);
      const stateFinaleADDED = { ...state };
      console.log("STATO FINALE PROJECT REDUCER ADDED ONE", stateFinaleADDED);

      return { ...state };

    case PROJECTS.PROJECT_ONE_LOADED_SUCCESS:
      console.log(
        "stamnpa ricevuti in projectReducer - Load ONE SUCCESS",
        state
      );
      console.log(
        "stamnpa ACTION in projectReducer - Load ONE SUCCESS",
        action
      );
      const stateFinaleONEloaded = { ...state, project: action.project };
      console.log(
        "STATO FINALE PROJECT REDUCER LOADED ONE",
        stateFinaleONEloaded
      );
      return { ...state, project: action.project };

    case PROJECTS.PROJECT_DELETED_SUCCESS:
      console.log("stamnpa ricevuti in projectReducer - DELETE SUCCESS", state);
      console.log("stamnpa ACTION in projectReducer - DELETE SUCCESS", action);
      const { projectIdentifier } = action;
      console.log(
        "stamnpa projectIdentifier - DELETE SUCCESS",
        projectIdentifier
      );
      return {
        ...state,
        projects: state.projects.filter(
          (proj) => proj.projectIdentifier !== projectIdentifier
        ),
      };
    default:
      return state;
  }
};

export default projectsReducer;
