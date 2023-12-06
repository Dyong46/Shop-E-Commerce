import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const addressGetAll = () => {
  return api.get(`${pathApi.address}`);
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

export { addressGetAll, addAddress, deleteAddress, updateAddress, changeDefaultAddress};