import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import useProductsById from '../hooks/useProductsById'
import { useParams } from 'react-router-dom'
const Item = () => {
    const {id}=useParams()
    const {product}=useProductsById(id)
  return (
    <ItemDetailContainer product={product} />
  )
}

export default Item
