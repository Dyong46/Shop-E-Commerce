import api from './axiosConfig';

const categoriesGetAll = () => {
  return api.get(`/api/category`);
};

export { categoriesGetAll };
