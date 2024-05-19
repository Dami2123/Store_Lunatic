import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


const CartWidgetComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} className='iconoCart'/>
      <sup class="contador">0</sup>
    </div>
  )
}

export default CartWidgetComponent
