import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const getAllOrder = () => {
    return api.get(`${pathApi.order}`)
}

const postOrders = (url,obj) => {
    return api.post(url,obj)
}

const getAllOrderDetails = () => {
    return api.get(`${pathApi.order}`+'/details')
}

const postOrderDetails =(url,obj)=>{
    return api.post(url,obj)
}
const getOrderByAccount = (id) => {
    return api.get(`${pathApi.order}`+'/details/'+`${id}`)
}
const getOrderByAccountStatus = (id,status) => {
    return api.get(`${pathApi.order}`+'/details/'+`${id}`+"/"+`${status}`)
}

const setStatus = (idorder)=> {
    return api.put(`${pathApi.order}`+'/cancel/'+`${idorder}`)
}

const setStatusDone = (idorder) => {
    return api.post(`${pathApi.order}`+'/complete?order_id='+`${idorder}`)
}
export {getAllOrder,postOrders,postOrderDetails,getAllOrderDetails,getOrderByAccount,getOrderByAccountStatus,setStatus,setStatusDone}