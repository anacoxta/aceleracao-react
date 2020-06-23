import React from 'react';
import './style.scss';

const ProductCartDescription = ({ className }) => {
  return (
    <section className={`productCartDescription ${className}`}>
      <p className='productCartDescription__name'>NOME DO PRODUTO</p>
      <div className='productCartDescription__pricingGroup'>
        <div className='productCartDescription__actual'>
          <span className='productCartDescription__price--actual'>R$ 69,90</span>
          <span className='productCartDescription__installments'>em até 3x R$23,30</span>
        </div>
        <div className='productCartDescription__reg'>
          {/* <span className='productCartDescription__discountPercent'>(desconto de 30%)</span>
          <span className='productCartDescription__price--reg'>R$ 109,90</span> */}
        </div>
      </div>
    </section>
  );
};

export default ProductCartDescription;
