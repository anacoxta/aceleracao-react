import React from 'react';
import classnames from 'classnames';
import './style.scss';

const ProductDescription = ({ layout, name, regularPrice, actualPrice, installments, onSale }) => {
  return (
    <section className={`productDescription ${layout}`}>
      <p className='productDescription__name'>{name}</p>
      <div className='productDescription__pricingGroup'>
        <div className='productDescription__actual'>
          {onSale && <span className='productDescription__price--actual'>{actualPrice}</span>}
          <span className={classnames({ 'price--line': onSale, productDescription__reg: !onSale })}>
            {regularPrice}
          </span>
          <span className='productDescription__installments'>{installments}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
