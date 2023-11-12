import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const getAllDiscount = () => {
  return api.get(`${pathApi.discount}`);
};

const getDiscountById = (id) => {
  return api.get(`${pathApi.discount}/${id}`);
};


export { getAllDiscount, getDiscountById };
