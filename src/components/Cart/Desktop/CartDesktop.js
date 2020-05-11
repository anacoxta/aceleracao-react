import React from 'react';
import './CartDesktop.scss';

const CartDesktop = ({ active }) => {
  console.log(active)
  return (
    <div className={`cart__container cart__container--active-${active}`}>
      Carrinho
    </div>
  );
}

export default CartDesktop;
