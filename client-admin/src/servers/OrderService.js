import api from "./axiosConfig";
import pathApi from "constrants/pathApi";

const getAllOrder = () => {
  return api.get(`${pathApi.order}`);
};

const postOrders = (url, obj) => {
  return api.post(url, obj);
};

const getAllOrderDetails = () => {
  return api.get(`${pathApi.order}` + "/details");
};

const postOrderDetails = (url, obj) => {
  return api.post(url, obj);
};

const getOrderById = (id) => {
  return api.get(`${pathApi.order}/${id}`);
};

const getOrderByAccount = (id) => {
  return api.get(`${pathApi.order}` + "/details/" + `${id}`);
};

const getOrderByStatus = (id) => {
  return api.get(`${pathApi.order}` + "/status/" + `${id}`);
};

const getOrderByAccountStatus = (id, status) => {
  return api.get(`${pathApi.order}` + "/details/" + `${id}` + "/" + `${status}`);
};

const setStatusCancel = (idorder) => {
  return api.put(`${pathApi.order}` + "/cancel?order_id=" + `${idorder}`);
};

const changeStatusOrder = (idorder) => {
  return api.put(`${pathApi.order}` + "/shipping?order_id=" + `${idorder}`);
};

const setStatusDone = (idorder) => {
  return api.post(`${pathApi.order}` + "/complete?order_id=" + `${idorder}`);
};

const getStatistical = () => {
  return api.get(`${pathApi.order}` + "/statistical/totalprice");
};

const getTopProduct = () => {
  return api.get(`${pathApi.order}` + "/statistical/topproduct");
};

const getTopAccount = () => {
  return api.get(`${pathApi.order}` + "/statistical/topaccounts");
};

const getStatisticalYear = (years) => {
  return api.post(`${pathApi.order}` + "/statistical/year?year=" + `${years}`);
};

export {
  getAllOrder,
  postOrders,
  getOrderById,
  postOrderDetails,
  getAllOrderDetails,
  getOrderByAccount,
  getOrderByAccountStatus,
  setStatusCancel,
  setStatusDone,
  changeStatusOrder,
  getOrderByStatus,
  getStatistical,
  getStatisticalYear,
  getTopProduct,
  getTopAccount,
};
