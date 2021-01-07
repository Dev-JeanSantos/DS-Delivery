import axios from "axios";
const API_URL = 'https://sds2-jeansantos.herokuapp.com';

export function fetchProducts() {

    return axios(`${API_URL}/products`);
    
}