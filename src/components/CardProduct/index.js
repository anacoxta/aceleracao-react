import React from 'react';
import Image from '../Image'
import ProductDescription from '../ProductDescription'
import { Link } from 'react-router-dom'

import './style.scss';

const CardProduct = ({ src, alt, discountPrice, className, name, regularPrice, actualPrice, onSale, productId }) => {

  return (
    <Link to={`/product/${productId}`} className='cardProductDefault__inner' tabIndex="0">
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
    </Link>
  );
};

export default CardProduct;
