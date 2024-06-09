import React from 'react'
import getProductsCategoryList from '../servicios/productsCategoryList';

const useProductsCategoryList = () => {
    const [categories, setcategories]= React.useState([]);
React.useEffect(()=>{
    getProductsCategoryList ()
    .then((response)=>{
        setcategories(response.data);
    })
    .catch((error)=>{
        console.error(error);
    })

},[])
  return {categories}
}

export default useProductsCategoryList 
