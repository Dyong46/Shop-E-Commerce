import api from './axiosConfig';

const productGetAll = () => {
  return api.get(`/api/products`);
};

export { productGetAll };
