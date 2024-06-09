import axios from "axios";

 async function getProductsCategoryList(){
    return axios.get(`https://dummyjson.com/products/categories`);
   
}




export default getProductsCategoryList