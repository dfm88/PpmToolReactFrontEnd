import axios from "axios";

const urlBase = "http://localhost:8080/api/project/";

export const getProjects = () => {
  return axios.get(`${urlBase}all`).then((res) => {
    console.log("RESP. DAL SERVER", res);
    return res;
  });
};
