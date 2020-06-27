import React from 'react';
import Image from '../Image'
import ProductDescription from '../ProductDescription'

import './style.scss';

const CardProduct = ({ src, alt, discountPrice, className, name, regularPrice, actualPrice, classNameDescription }) => {

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
        classNameDescription={classNameDescription}
      />
    </div>
  );
};

export default CardProduct;
