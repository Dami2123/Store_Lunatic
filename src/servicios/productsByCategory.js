import axios from "axios";

 async function getProductsByCategory(category){
    return axios.get(`https://dummyjson.com/products/category/${category}`);
   
}




export default getProductsByCategory