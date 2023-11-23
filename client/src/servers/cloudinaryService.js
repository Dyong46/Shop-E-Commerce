import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const upload = (file) => {
  console.log(file.image);
  return api.postForm(`${pathApi.cloudinary}/upload`, {image: file.image})
}

export {upload} 