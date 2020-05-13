import React from 'react';
import './CartContainer.scss';

const CartContainer = ({ activeCart, setActiveCart }) => {
  return (
    <div className={activeCart ? 'cart__container cart__container--display' : 'cart__container'}>
      <div
        className={activeCart ? 'cart__container--active' : ''}
        role='dialog'
        aria-label='Carrinho de compras'>
        <button
          className='cart__container__button'
          aria-label='Fechar carrinho de compras'
          onClick={() => setActiveCart(!activeCart)}>
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
    </div>
  );
}

export default CartContainer;
