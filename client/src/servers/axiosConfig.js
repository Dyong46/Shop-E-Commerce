import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1203/',
});

instance.interceptors.response.use(
  function (response) {
    return response.data ? response.data : { success: response.success };
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
