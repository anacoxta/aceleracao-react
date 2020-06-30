import React from 'react';
import { connect } from 'react-redux';
import ProductBox from '../ProductBox';

import './style.scss';

const CartModal = ({ activeCart, setActiveCart, cartAmount, products }) => {
  return (
    <section className='cartModal'>
      <header className='cartModal__header cartModal__container'>
        <button
          className='cartModal__button'
          aria-label='Fechar carrinho de compras'
          onClick={() => setActiveCart(!activeCart)}
        >
          <i className='fas fa-times-circle'></i>
        </button>
        <div className='cartModal__headerBox'>
          <h2 className='cartModal__title'>Sacola</h2>
          <span className='cartModal__totalItems'>
            {cartAmount === 0
              ? 'Carrinho vazio'
              : cartAmount > 1
              ? `${cartAmount} itens`
              : '1 item'}
          </span>
        </div>
      </header>
      <main className='cartModal__container'>
        {products.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </main>
    </section>
  );
};

const mapStateToProps = (store) => ({
  cartAmount: store.totalAmount,
  products: store.products,
});

export default connect(mapStateToProps)(CartModal);
