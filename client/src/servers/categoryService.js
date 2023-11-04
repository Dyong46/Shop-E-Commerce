import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const categoriesGetAll = () => {
  return api.get(`${pathApi.category}`);
};

export { categoriesGetAll };
