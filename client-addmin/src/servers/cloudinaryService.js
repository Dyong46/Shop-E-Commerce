import api from "./axiosConfig";
import pathApi from "constrants/pathApi";

const upload = (file) => {
  console.log("file in upload ", file);
  return api.postForm(`${pathApi.cloudinary}/upload`, { image: file.image });
};

export { upload };
