import api from './axiosConfig';
import pathApi from '~/constants/pathApi';

const getAllOrder = () => {
    return api.get(`${pathApi.order}`)
}

const postOrders = (order) => {
    return api.post(`${pathApi.order}/pay-product`, order)
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
export {getAllOrder,postOrders,postOrderDetails,getAllOrderDetails,getOrderByAccount}