import React from 'react';

import './CartModal.scss';

const CartModal = ({props}) => {
  return (
    <section className="cartModal">
      <header className="cartModal__header">
        <div className="cartModal__headerBox">
          <h2 className="cartModal__title">Sacola</h2>
        </div>
        <p className="cartModal__totalItems">5 itens</p>
      </header>
      <main className="cartModal__content">
        <div classname="cartModal__item">
          {/* <FakeImg /> */}
          <div>
            {/* <FakeProductDescription /> */}
            {/* <FakeSelect /> */}
            <button className="cartModal__removeItemBtn">
              Remover Produto
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default CartModal;
