import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const getAllAccounts = () => {
  return api.get(`${pathApi.account}`);
};

const getAccountById = (id) => {
  return api.get(`${pathApi.account}/findbyid?id=${id}`);
};

const createAccount = (account) => {
  return api.post(`${pathApi.account}/save`, account);
};

const updateAccount = (id, account) => {
  return api.put(`${pathApi.account}/update?id=${id}`, account);
};

const deleteAccount = (id) => {
  return api.delete(`${pathApi.account}/delete?id=${id}`);
};

export { getAllAccounts, getAccountById, createAccount, updateAccount, deleteAccount };
