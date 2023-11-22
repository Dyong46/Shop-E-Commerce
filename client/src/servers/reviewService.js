import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const reviewProduct = (id) => {
  return api.get(`${pathApi.review}/${id}`)
}

export {reviewProduct}
