import React from 'react';
import './CartIcon.scss';

const CartIcon = () => {
  return (
    <button data-count='5'>
      <i className='fas fa-shopping-cart'></i>
    </button>
  );
}

export default CartIcon;
