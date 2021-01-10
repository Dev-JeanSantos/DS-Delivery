import axios from "axios";

const APi_URL = 'https://sds2-jeansantos.herokuapp.com';


export function fetchOrders(){
    return axios(`${APi_URL}/orders`);
}
export function confirmDelivery(orderId: number){
    return axios.put(`${APi_URL}/orders/${orderId}/delivered`);
}