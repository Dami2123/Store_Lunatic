import React from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const useProductsById = (id) => {
    const [product, setProduct]= React.useState({});

React.useEffect(()=>{
   const db= getFirestore();
   const producRef= doc(db,"productos", id);

   getDoc(producRef)
   .then((doc)=>{
        setProduct({id: doc.id, ...doc.data()});
   }).catch((error)=>console.log(error))


},[id]);

  return {product}
}

export default useProductsById
