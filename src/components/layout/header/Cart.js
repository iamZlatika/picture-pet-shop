import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

const Cart = () => {
  return (
    <div className="cart cart-icon"> <Link to='/cart'
          className="close"
          >
      <FontAwesomeIcon
        icon={faCartArrowDown} 
      />
    </Link>
    </div>
  )
}

export default Cart
