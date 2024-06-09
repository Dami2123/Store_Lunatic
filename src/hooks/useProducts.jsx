import React from 'react'
import getAllProducts from '../servicios/products';

const useProducts = () => {
    const [products, setproducts]= React.useState([]);
React.useEffect(()=>{
    getAllProducts()
    .then((response)=>{
        setproducts(response.data.products);
    })
    .catch((error)=>{
        console.error(error);
    })

},[])
  return {products}
}

export default useProducts
