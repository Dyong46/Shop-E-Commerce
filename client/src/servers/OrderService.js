import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const getAllOrder = () => {
    return api.get(`${pathApi.order}`)
}

const postOrders = (order) => {
    return api.post(`${pathApi.order}`, order)
}

const stripePayment = (order) => {
  return api.post(`${pathApi.stripe}/checkout`, order)
}

const getAllOrderDetails = () => {
    return api.get(`${pathApi.order}`+'/details')
}

const postOrderDetails =(url,obj)=>{
    return api.post(url,obj)
}
const getOrderByAccount = (id) => {
    return api.get(`${pathApi.order}/account/${id}`)
}
const getOrdersByStatus = (acountId, statusId) => {
    return api.get(`${pathApi.order}/status?account_id=${acountId}&status_id=${statusId}`)
}

const setStatusCancel = (idorder)=> {
    return api.put(`${pathApi.order}`+'/cancel?order_id='+`${idorder}`)
}

const setStatusDone = (idorder) => {
    return api.put(`${pathApi.order}`+'/complete?order_id='+`${idorder}`)
}
export {getAllOrder,postOrders,postOrderDetails,getAllOrderDetails,getOrderByAccount,getOrdersByStatus,setStatusCancel,setStatusDone,stripePayment}