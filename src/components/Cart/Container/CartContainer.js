import React from 'react';
import './CartContainer.scss';

const CartContainer = ({ active }) => {
  return (
    <div className={active ? 'cart__container cart__container--display' : 'cart__container'}>
      <div className={active ? 'cart__container--active' : ''}>
        Carrinho
      </div>
    </div>
  );
}

export default CartContainer;
