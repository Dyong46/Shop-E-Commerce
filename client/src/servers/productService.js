import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const productGetAll = () => {
  return api.get(`${pathApi.product}`);
};

const getProducts = (params) => {
  return api.get(`${pathApi.product}`,{params})
}

const productById = (id) => {
  return api.get(`${pathApi.product}/${id}`);
};


export { productGetAll, productById, getProducts };
