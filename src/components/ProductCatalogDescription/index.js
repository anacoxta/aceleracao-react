import React from 'react';
import './style.scss';

const ProductCatalogDescription = ({ name, regular_price, actual_price }) => {
  return (
    <section className='productCatalogDescription'>
      <p className='productCatalogDescription__name'>{name}</p>
      <div className='productCatalogDescription__pricingGroup'>
        <span className='productCatalogDescription__price--actual'>{actual_price}</span>
        <span className='productCatalogDescription__price--reg'>{regular_price}</span>
      </div>
    </section>
  );
};

export default ProductCatalogDescription;
