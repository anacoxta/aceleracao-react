import React from "react";
import "./ProductDescription.scss";

const ProductDescription = () => {
  return (
    <section className="productDescription">
      <p className="productDescription__name">NOME DO PRODUTO</p>
      <div className="productDescription__pricing">
        <span className="productDescription__price--actual">R$ 69,90</span>
        <span className="productDescription__price--reg">R$ 109,90</span>
      </div>
    </section>
  );
};

export default ProductDescription;
