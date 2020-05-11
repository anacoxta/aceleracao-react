import React from 'react';
import './CartContainer.scss';

const CartContainer = ({ activeCart, setActiveCart }) => {
  return (
    <div className={activeCart ? 'cart__container cart__container--display' : 'cart__container'}>
      <div className={activeCart ? 'cart__container--active' : ''}>
        <button className='cart__container__button' onClick={() => setActiveCart(!activeCart)}>
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
    </div>
  );
}

export default CartContainer;
