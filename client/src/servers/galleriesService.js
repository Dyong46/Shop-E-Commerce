import api from './axiosConfig';

const getGalleries = (productId) => {
    return api.get(`/api/galleries/by-product/${productId}`)
}

export {getGalleries}