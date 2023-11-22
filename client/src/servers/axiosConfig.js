import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1203/',
  urlVnPay: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
  urlVnPayApi: 'https://sandbox.vnpayment.vn/merchant_webapi/api/transaction',
});

instance.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  },
);

export default instance;
