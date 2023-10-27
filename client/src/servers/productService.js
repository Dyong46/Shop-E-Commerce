import api from './axiosConfig';

const productGetAll = () => {
  return api.get(`/api/products`);
};

const productById = (id) => {
  return api.get(`/api/products/findbyid?id=${id}`);
};


export { productGetAll, productById };
