import React from 'react'

const ItemDetailContainer = (product) => {
    const productImage = product.product.images
    console.log(productImage)

    //{product.images.map((image,index)=>{
    //return <img key={index}  src={image} alt={product.product.title} className='productImage'/> }) }
    return (
    
        <div className='itemContainer'>

            <img src={product.product.thumbnail} alt={product.product.title} className='productImage' />
            <div className='textItemContainer'>
                <h1>{product.product.title}</h1>
                <p>{product.product.description}</p>
                <p><b>${product.product.price}</b></p>
                <p>Ranking: {product.product.rating}</p>
            </div>

        </div>
        
      
    )
}

export default ItemDetailContainer
