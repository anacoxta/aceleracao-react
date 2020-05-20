import React from "react";
import "./ProductDescription.scss";

const ProductDescription = () => {
  return (
    <div className="myContainer">
      <section className="productDescription isInsideCart">
        <p className="productDescription__name">NOME DO PRODUTO</p>
        <div className="productDescription__pricing-group">
          <div className="productDescription__actual">
            <span className="productDescription__price--actual">R$ 69,90</span>
            <span className="productDescription__installments">
              {" "}
              3x R$23,30
            </span>
          </div>
          <div className="productDescription__reg">
          <span className="productDescription__price--reg">R$ 109,90</span>
          <span className="productDescription__discount-percent">(desconto de 30%)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDescription;
