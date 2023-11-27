import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://provinces.open-api.vn/api/',
});

instance.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  },
);

export const getProvices = () => {
  return instance.get();
}

export const getDistrict = (idProvice) => {
  return instance.get(`p/${idProvice}?depth=2`)
}

export const getWard = (idDistrict) => {
  return instance.get(`d/${idDistrict}?depth=2`)
}


