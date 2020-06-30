import React from 'react';
import { connect } from 'react-redux';
import CartModal from '../Modal';
import ButtonCta from '../../ButtonCta';
import { handleKeepBuyingBtn, handlePaymentBtn } from '../../../utils/buttonFunctions';

import './style.scss';

const CartContainer = ({ activeCart, setActiveCart, totalPrice }) => {
  return (
    <div className={activeCart ? 'cart__container cart__container--display' : 'cart__container'}>
      <div
        className={activeCart ? 'cart__container--active' : ''}
        role='dialog'
        aria-label='Carrinho de compras'
      >
        <CartModal activeCart={activeCart} setActiveCart={setActiveCart} />
        <div className='cart__container__group'>
          <div className='cart__container__subtotal'>
            <span>Subtotal</span>
            <span className='cart__container__subtotalPrice'>
              {totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
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
    </div>
  );
};

const mapStateToProps = (store) => ({
  totalPrice: store.totalPrice,
});

export default connect(mapStateToProps)(CartContainer);
