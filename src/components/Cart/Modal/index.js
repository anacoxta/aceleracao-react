import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import ProductBox from '../ProductBox';
import ButtonCta from '../../ButtonCta';
import { handleKeepBuyingBtn, handlePaymentBtn } from '../../../utils/buttonFunctions';

const CartModal = ({ activeCart, setActiveCart, cartAmount, products, totalPrice }) => {
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
              handleClick={handleKeepBuyingBtn}
            />
            <ButtonCta text='Finalizar pagamento' layout='filled' handleClick={handlePaymentBtn} />
          </div>
        </div>
      </main>
    </section>
  );
};

const mapStateToProps = (store) => ({
  cartAmount: store.totalAmount,
  products: store.products,
});

export default connect(mapStateToProps)(CartModal);
