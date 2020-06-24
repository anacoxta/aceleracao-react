import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const CartBtn = (props) => {
  const { cartAmount, setActiveCart, activeCart } = props;

  return (
    <button
      className='cart__button'
      data-count={cartAmount}
      aria-label='Abrir carrinho de compras'
      onClick={() => setActiveCart(!activeCart)}
    >
      <i className='fas fa-shopping-cart'></i>
    </button>
  );
};

const mapStateToProps = (store) => ({
  cartAmount: store.totalAmount,
});

export default connect(mapStateToProps)(CartBtn);
