import axios from "axios";

 async function getProductsById(id){
    return axios.get(`https://dummyjson.com/products/${id}`);
   
}




export default getProductsById