import React from 'react';
import './style.scss';

import CartModal from '../Modal';
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
        <CartModal activeCart={activeCart} setActiveCart={setActiveCart} />
        <div className='cart__container__btnGroup'>
          <ButtonCta
            text='Continuar comprando'
            layout='default'
            handleClick={handleKeepBuyingBtn}
          />
          <ButtonCta text='Finalizar pagamento' layout='filled' handleClick={handlePaymentBtn} />
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
