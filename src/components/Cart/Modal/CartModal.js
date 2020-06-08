import React from 'react';

import './CartModal.scss';
import ProductDescription from '../../ProductDescription/ProductDescription';

const CartModal = ({ activeCart, setActiveCart }) => {
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
          <span className='cartModal__totalItems'>5 itens</span>
        </div>
      </header>
      <main className='cartModal__container'>
        <div className='cartModal__item'>
          {/* <FakeImg /> */}
          <div>
            <ProductDescription />
            {/* <FakeSelect /> */}
            <button className='cartModal__removeItemBtn'>
              Remover Produto
            </button>
          </div>
        </div>
        <div className='cartModal__item'>
          {/* <FakeImg /> */}
          <div>
            <ProductDescription />
            {/* <FakeSelect /> */}
            <button className='cartModal__removeItemBtn'>
              Remover Produto
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CartModal;
