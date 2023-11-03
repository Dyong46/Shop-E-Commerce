import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const productGetAll = () => {
  return api.get(`${pathApi.product}`);
};

const productById = (id) => {
  return api.get(`${pathApi.product}/${id}`);
};


export { productGetAll, productById };
