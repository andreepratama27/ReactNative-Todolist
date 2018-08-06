import axios from "axios";

export const API = () => {
  return axios.create({
    baseURL: "http://localhost:3000/api/v1/",
    timeout: 120000,
    headers: {
      Accept: "application/json",
      Content: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    }
  });
};
