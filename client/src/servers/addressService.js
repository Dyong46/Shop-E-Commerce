import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const addressGetAll = () => {
  return api.get(`${pathApi.address}`);
};

const addAddress = (address) => {
  console.log(address);
  return null
}

const updateAddress = (id, address) => {
  return api.put(`${pathApi.address}/${id}`, address)
}

const deleteAddress = (id) => {
  return api.delete(`${pathApi.address}`, {id})
}

const changeDefaultAddress = (id) => {
  return api.put(`${pathApi.address}/changeDefault/${id}`)
}

export { addressGetAll, addAddress, deleteAddress, updateAddress, changeDefaultAddress};