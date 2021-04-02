import axios from "axios";

const urlBase = "http://localhost:8080/api/project/";

export const getProjects = () => {
  return axios.get(`${urlBase}all`).then((res) => {
    console.log("RESPONsE alla GET", res);
    return res;
  });
};

export const addProject = (data, history) => {
  return axios.post(urlBase, data).then((res) => {
    console.log("proget Add ricevuto in API1", data);
    console.log("proget Add ricevuto in API2", res);

    history.push("/dashboard");
    if (res.status >= 400) {
      console.log("risposta >= 400 in API addProject");
    } else {
      return res;
    }
  });
};
