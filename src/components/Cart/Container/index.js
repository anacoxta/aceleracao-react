import React from "react";
import "./style.scss";

import CartModal from '../Modal/CartModal';

const CartContainer = ({ activeCart, setActiveCart }) => {
  return (
    <div
      className={
        activeCart
          ? "cart__container cart__container--display"
          : "cart__container"
      }
    >
      <div
        className={activeCart ? "cart__container--active" : ""}
        role="dialog"
        aria-label="Carrinho de compras"
      >
        <CartModal activeCart={activeCart} setActiveCart={setActiveCart} />
      </div>
    </div>
  );
};

export default CartContainer;
