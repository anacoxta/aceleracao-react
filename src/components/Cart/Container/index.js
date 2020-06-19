import React from 'react';
import './style.scss';

import ButtonCta from '../../ButtonCta';
import { handleKeepBuyingBtn, handlePaymentBtn } from '../../../utils/buttonFunctions';

const CartContainer = ({ activeCart, setActiveCart }) => {
  return (
    <div className={activeCart ? 'cart__container cart__container--display' : 'cart__container'}>
      <div
        className={activeCart ? 'cart__container--active' : ''}
        role='dialog'
        aria-label='Carrinho de compras'
      >
        <button
          className='cart__container__button'
          aria-label='Fechar carrinho de compras'
          onClick={() => setActiveCart(!activeCart)}
        >
          <i className='fas fa-times-circle'></i>
        </button>

        <div className='cart__container__btnGroup'>
          <ButtonCta
            text='Continuar comprando'
            layout='default'
            handleClick={handleKeepBuyingBtn}
          />
          <ButtonCta text='Ir para o pagamento' layout='filled' handleClick={handlePaymentBtn} />
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
