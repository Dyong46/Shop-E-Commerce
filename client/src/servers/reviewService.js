import api from './axiosConfig';

const reviewProduct = (id) => {
  return api.get(`/api/reviews/${id}`)
}

export {reviewProduct}
