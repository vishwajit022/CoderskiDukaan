import axios from 'axios';

const url = import.meta.env.SERVER_URL || "http://localhost:5000" ;

export const addCart = async (data)=>{
    try {
        await axios.post(`${url}/api/v1/carts/addcart`, data);
    } catch (error) {
        console.log("data getching error", error.message)
    }
}
export const getCart = async (data)=>{
    try {
        await axios.post(`${url}/api/v1/carts/getcart`, data);
    } catch (error) {
        console.log("data getching error", error.message)
    }
}
