import axios from "axios";

const urlBase = "http://localhost:8080/api/project/";

export const getProjects = () => {
  return axios.get(`${urlBase}all`).then((res) => {
    return res;
  });
};

export const addProject = (data) => {
  return axios.post(urlBase, data).then((res) => {
    console.log("proget Add ricevuto in API1", data);
    console.log("proget Add ricevuto in API2", res);

    return res;
  });
};
