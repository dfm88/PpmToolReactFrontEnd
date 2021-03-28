import axios from "axios";

const urlBase = "http://localhost:8080/api/project/";

export const getProjects = () => {
  axios.get(`${urlBase}all`).then((res) => {
    console.log(res);
  });
};
