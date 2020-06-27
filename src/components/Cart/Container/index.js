import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import CartModal from '../Modal';

const CartContainer = ({ activeCart, setActiveCart, totalPrice }) => {
  return (
    <div className={activeCart ? 'cart__container cart__container--display' : 'cart__container'}>
      <div
        className={activeCart ? 'cart__container--active' : ''}
        role='dialog'
        aria-label='Carrinho de compras'
      >
        <CartModal activeCart={activeCart} setActiveCart={setActiveCart} totalPrice={totalPrice}/>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  totalPrice: store.totalPrice,
});

export default connect(mapStateToProps)(CartContainer);
