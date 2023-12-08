import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const addressGetAll = () => {
  return api.get(`${pathApi.address}`);
};


const addressGetAllByAccount = (idaccount) => {
  return api.get(`${pathApi.address}`+'/user?id='+`${idaccount}`);
};

const addAddress = (address) => {
  return api.post(`${pathApi.address}`, address)
}

const updateAddress = (id, address) => {
  return api.put(`${pathApi.address}/${id}`, address)
}

const deleteAddress = (id) => {
  return api.delete(`${pathApi.address}/${id}`)
}

const changeDefaultAddress = (idAccount, idAddress) => {
  return api.put(`${pathApi.address}/user/${idAccount}/${idAddress}`)
}

export { addressGetAll,addressGetAllByAccount, addAddress, deleteAddress, updateAddress, changeDefaultAddress};