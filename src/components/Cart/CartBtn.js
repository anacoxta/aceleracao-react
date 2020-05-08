import React from 'react';
import './CartBtn.scss';

const CartBtn = () => {
  return (
    <button data-count='5'>
      <i className='fas fa-shopping-cart'></i>
    </button>
  );
}

export default CartBtn;
