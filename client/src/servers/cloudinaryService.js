import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const upload = (file) => {
  return api.postForm(`${pathApi.cloudinary}/upload`, {image: file.image})
}

export {upload} 