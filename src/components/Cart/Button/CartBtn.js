import React from 'react';
import './CartBtn.scss';

const CartBtn = ({ activeCart, setActiveCart }) => {
  return (
    <button
      className='cart__button'
      data-count='5'
      aria-label='Abrir carrinho de compras'
      onClick={() => setActiveCart(!activeCart)}>
      <i className='fas fa-shopping-cart'></i>
    </button>
  );
}

export default CartBtn;
