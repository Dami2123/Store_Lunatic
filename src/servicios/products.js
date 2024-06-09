import axios from "axios";

 async function getAllProducts(){
    return axios.get('https://dummyjson.com/products');
}



export default getAllProducts

