import api from "./axiosConfig";
import pathApi from "constrants/pathApi";

const productGetAll = () => {
  return api.get(`${pathApi.product}`);
};

const productById = (id) => {
  return api.get(`${pathApi.product}/${id}`);
};

const createProduct = (product) => {
  return api.post(`${pathApi.product}`, product);
};

const updateProduct = (id, product) => {
  return api.put(`${pathApi.product}/${id}`, product);
};

const removeProduct = (id) => {
  return api.delete(`${pathApi.product}/${id}`);
};

export { productGetAll, updateProduct, productById, createProduct, removeProduct };
