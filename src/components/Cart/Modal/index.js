import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import ProductBox from '../ProductBox';

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
            {cartAmount} {cartAmount > 1 ? 'itens' : 'item'}
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