import React from 'react'
import getProductsByCategory from '../servicios/productsByCategory';

const useProductsByCategory = (category) => {
    const [products, setproducts]= React.useState([]);
React.useEffect(()=>{
    getProductsByCategory(category)
    .then((response)=>{
        setproducts(response.data.products);
    })
    .catch((error)=>{
        console.error(error);
    });

},[category])

  return {products}
}

export default useProductsByCategory
