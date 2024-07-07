import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { CartContext } from '../../context/CartContext';


const CartWidgetComponent = () => {

  const { cart } = React.useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} className='iconoCart'/>
      <sup className="contador">{totalItems}</sup>
    </div>
  )
}

export default CartWidgetComponent
