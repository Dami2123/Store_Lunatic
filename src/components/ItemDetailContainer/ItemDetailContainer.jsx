import React from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const ItemDetailContainer = (product) => {

    const { addToCart, removeFromCart } = React.useContext(CartContext);
    const [quantity, setQuantity] = React.useState(0);

    const handleAdd = () => {
        setQuantity(quantity + 1);
       
    };

    const handleRemove = () => {
        if (quantity>0){
            setQuantity(quantity - 1);
        }   
    };
    const handleAddCart= () => {
        addToCart(product.product, quantity);
        setQuantity(0);
    };

    return (

        <div className='itemContainer'>

            <img src={product.product.thumbnail} alt={product.product.title} className='productImage' />
            <div className='textItemContainer'>
                <h1>{product.product.title}</h1>
                <p>{product.product.description}</p>
                <p><b>${product.product.price}</b></p>
                <p>Ranking: {product.product.rating}</p>
                <div>
                    <button className='boton_cambio' onClick={handleRemove}>-</button>
                    <span>{quantity}</span>
                    <button className='boton_cambio' onClick={handleAdd}>+</button>
                </div>
                <button  className='boton_agregar' onClick={handleAddCart}>Agregar carrito</button>

            </div>
            

        </div>


    )
}

export default ItemDetailContainer
