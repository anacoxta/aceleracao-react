import React from 'react';
import { useParams } from 'react-router';
import '../defaultStyles.scss';

const Product = () => {
  const { productCode } = useParams();

  return (
    <div className='pageContent'>
      <h1>Página do produto {productCode}</h1>
    </div>
  );
};

export default Product;
