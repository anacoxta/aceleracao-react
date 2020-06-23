import React from 'react';

import './style.scss';
import ProductCartDescription from '../../ProductCartDescription';
import Image from '../../Image';
import SelectUnit from '../../SelectUnit';
import ProductPhoto from '../../../assets/product.png';

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
          <Image className='product__cart' src={ProductPhoto} />
          <div className='cartModal__text'>
            <ProductCartDescription className='isInsideCart' />
            <div>
              <p className='cartModal__size'>Tamanho: G</p>
            </div>
            <SelectUnit />
            <button className='cartModal__removeItemBtn'>Remover Produto</button>
          </div>
        </div>
        <div className='cartModal__item'>
          <Image className='product__cart' src={ProductPhoto} />
          <div className='cartModal__text'>
            <ProductCartDescription className='isInsideCart' />
            <div>
              <p className='cartModal__size'>Tamanho: G</p>
            </div>
            <SelectUnit />
            <button className='cartModal__removeItemBtn'>Remover Produto</button>
          </div>
        </div>
        <div className='cartModal__item'>
          <Image className='product__cart' src={ProductPhoto} />
          <div className='cartModal__text'>
            <ProductCartDescription className='isInsideCart' />
            <div>
              <p className='cartModal__size'>Tamanho: G</p>
            </div>
            <SelectUnit />
            <button className='cartModal__removeItemBtn'>Remover Produto</button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CartModal;
