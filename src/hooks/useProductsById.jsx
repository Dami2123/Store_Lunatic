import React from 'react'
import getProductsById from '../servicios/productsById';

const useProductsById = (id) => {
    const [product, setproduct]= React.useState([]);
React.useEffect(()=>{
    getProductsById(id)
    .then((response)=>{
        setproduct(response.data);
    })
    .catch((error)=>{
        console.error(error);
    });

},[id])

  return {product}
}

export default useProductsById
