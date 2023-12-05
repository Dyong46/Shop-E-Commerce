import api from "./axiosConfig";
import pathApi from "constrants/pathApi";

const categoriesGetAll = () => {
  return api.get(`${pathApi.category}`);
};

export { categoriesGetAll };
