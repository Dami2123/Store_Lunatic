import React from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

const useProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        const db= getFirestore();
        const productsCollection = collection(db,"productos");

        const productsQuery= query(
            productsCollection,
            where("category", "==", category)
        );

        getDocs(productsQuery)
        .then((snapshot)=>{
            setProducts(
                snapshot.docs.map((doc)=>( { id: doc.id, ...doc.data() }))
                ); 
        })
        

    }, [category])

    return { products }
}

export default useProductsByCategory
