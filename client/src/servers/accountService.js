import api from './axiosConfig';
import pathApi from '~/constants/pathApi';
import * as Bytescale from "@bytescale/sdk";
import config from '~/constants/config';

const getAllAccounts = () => {
  return api.get(`${pathApi.account}`);
};

const getAccountById = (id) => {
  return api.get(`${pathApi.account}/${id}`);
};

const createAccount = (account) => {
  return api.post(`${pathApi.account}`, account);
};

const updateAccount = (id, account) => {
  return api.put(`${pathApi.account}/${id}`, account);
};

const deleteAccount = (id) => {
  return api.delete(`${pathApi.account}/${id}`);
};

const login = (email, password, remember) => {
	return api.post(`${pathApi.account}/login?email=${email}&password=${password}&remember=${remember}`)
}

const register = ({email, username, password}) => {
	return api.post(`${pathApi.account}/register?email=${email}&username=${username}&password=${password}`)
}

const changePassword = (data) => {
	return api.post(`${pathApi.account}/change-password`, data)
}

const fetchAddress = ({id}) => {
  return api.get(`${pathApi.address}/user?id=${id}`)
}

const uploadManager = new Bytescale.UploadManager({
	apiKey: config.apiKey
});

export { getAllAccounts, getAccountById, createAccount, updateAccount, deleteAccount, login, register, changePassword,fetchAddress, uploadManager };
