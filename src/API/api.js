import axios from "axios";

const urlBase = "/api/project/";

export const getProjects = () => {
  return axios.get(`${urlBase}all`).then((res) => {
    console.log("RESPONsE alla GET ALL", res);
    return res;
  });
};

export const getProjectOne = (projectIdentifier, history) => {
  console.log("HISTORY alla GET ONE", history);
  return axios
    .get(`${urlBase}${projectIdentifier}`)
    .then((res) => {
      console.log("RESPONsE alla GET ONE", res);
      return res;
    })
    .catch((err) => {
      history.push("/dashboard");
    });
};

export const deleteProject = (projectIdentifier) => {
  return axios.delete(`${urlBase}${projectIdentifier}`).then((res) => res.data);
};

export const addProject = (data, history) => {
  const call = axios
    .post(urlBase, data)
    .then((res) => {
      console.log("proget Add ricevuto in API1", data);
      console.log("proget Add ricevuto in API2", res);

      history.push("/dashboard");

      return res;
    })
    .catch((err) => {
      if (err.response) {
        // client received an error response (5xx, 4xx)
        console.log("1 ERRORE IN API ADDPROJ", err.response);

        return err.response;
      } else if (err.request) {
        // client never received a response, or request never left
        console.log("2 ERRORE IN API ADDPROJ", err.request);
      } else {
        // anything else
        console.log("Nessun errore intercettato in API");
      }
      // Request made and server responded

      return err;
    });
  return call;
};
