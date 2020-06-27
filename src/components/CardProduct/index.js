import React from 'react';
import Image from '../Image'
import ProductDescription from '../ProductDescription'

import './style.scss';

const CardProduct = ({ src, alt, discountPrice, className, name, regularPrice, actualPrice, onSale }) => {

  return (
    <div className='cardProductDefault__inner'>
      <Image
        src={src}
        alt={alt}
        discountPrice={discountPrice}
        className={className}
      />
      <ProductDescription
        name={name}
        regularPrice={regularPrice}
        actualPrice={actualPrice}
        onSale={onSale}
      />
    </div>
  );
};

export default CardProduct;
