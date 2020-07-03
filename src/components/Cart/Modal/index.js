import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { resetCart } from '../../../actions';

import ProductBox from '../ProductBox';
import ButtonCta from '../../ButtonCta';

import './style.scss';

const CartModal = ({ activeCart, setActiveCart, cartAmount, products, totalPrice, resetCart }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  return (
    <>
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
        <main>
          <div className='cartModal__list cartModal__container'>
            {products.map((product) => (
              <ProductBox key={product.id} product={product} />
            ))}
          </div>
          <div className='cartModal__group'>
            <div className='cartModal__subtotal'>
              <span>Subtotal</span>
              <span className='cartModal__subtotalPrice'>
                {totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <div className='cartModal__btnGroup cartModal__container'>
              <ButtonCta
                text='Continuar comprando'
                layout='default'
                handleClick={() => setActiveCart(!activeCart)}
              />
              <ButtonCta
                text='Finalizar pagamento'
                layout='filled'
                isDisabled={products.length === 0}
                handleClick={() => setModalOpen(true)}
              />
            </div>
          </div>
        </main>
      </section>
      <section className={`modal ${isModalOpen ? 'modal--open' : ''}`}>
        <div className={`modal__content`}>
          <button
            className='cartModal__button modal__close'
            aria-label='Fechar modal de confirmação de compra'
            onClick={() => {
              setActiveCart(!activeCart);
              setModalOpen(!isModalOpen);
              resetCart();
              history.push('/');
            }}
          >
            <i className='fas fa-times-circle'></i>
          </button>
          <i class='far fa-check-circle'></i>
          <p>Sua compra foi finalizada com sucesso!</p>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (store) => ({
  cartAmount: store.totalAmount,
  products: store.products,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ resetCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
