import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

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

const register = (email, username, password) => {
	return api.post(`${pathApi.account}/register?email=${email}&username=${username}&password=${password}`)
}

const changePassword = (data) => {
	return api.post(`${pathApi.account}/change-password`, data)
}

const uploadAvatar = (body) => {
	const apiKey = '6d207e02198a847aa98d0a2a901485a5';
	
	return api.post(`http://freeimage.host/api/1/upload/?key=${apiKey}`, body, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
}

export { getAllAccounts, getAccountById, createAccount, updateAccount, deleteAccount, login, register, changePassword, uploadAvatar };
