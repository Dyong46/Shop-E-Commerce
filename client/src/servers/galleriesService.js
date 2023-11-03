import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const getGalleries = (productId) => {
    return api.get(`${pathApi.gallery}/${productId}`)
}

export {getGalleries}