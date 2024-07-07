import React from 'react'
import { CartContext } from "../context/CartContext";

const Checkout = () => {
    const { cart, removeFromCart, deleteFromCart,addToCart } = React.useContext(CartContext);
    const total = cart.reduce((total, item) => total +(item.quantity*item.price), 0);

    const handleAddOne = (item) => {
        addToCart(item, 1);
    };

    const handleRemoveOne = (item) => {
        removeFromCart(item, 1);
    };

    const handleDeleteItem = (item) => {
        deleteFromCart(item);
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>

            {cart.length > 0 ? (
                <div >
                    <div className='contenedor_productos'>
                        {cart.map((item, index) => (
                            <div key={index} className='subcontenedor__carrito'>
                                <img src={item.thumbnail} alt={item.title} className='img_carrito' />
                                <div className='detalles'>
                                    <h3>{item.title}</h3>
                                    <p>Precio unitario: ${item.price}</p>
                                   
                                
                                </div>
                                <div className='cambio_cant'>
                                     <button className='boton_cambio'  onClick={() => handleRemoveOne(item)}>-</button>
                                     <p>{item.quantity}</p>
                                    <button className='boton_cambio'  onClick={() => handleAddOne(item)}>+</button>
                                </div>
                               
                                     <p >Total: ${item.price * item.quantity}</p>
                                     <button className='eliminar' onClick={() => handleDeleteItem(item)}>eliminar</button>
                                

                            </div>
                        ))}
                    </div>

                    <div className='total'>Total: ${total} </div>
                </div>
            ) : (
                <p>Tu carrito está vacío</p>
            )}
        </div>
    );
};

export default Checkout
