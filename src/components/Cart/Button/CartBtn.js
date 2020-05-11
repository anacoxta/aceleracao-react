import React from 'react';
import './CartBtn.scss';

const CartBtn = ({ activeCart, setActiveCart }) => {
  return (
    <>
      <button data-count='5' onClick={() => setActiveCart(!activeCart)}>
        <i className='fas fa-shopping-cart'></i>
      </button>
    </>
  );
}

export default CartBtn;
