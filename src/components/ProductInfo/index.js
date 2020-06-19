import React from 'react';
import './style.scss';

import ProductDescription from '../ProductDescription';
import SizeSelect from '../SizeSelect';

const ProductInfo = () => {
  return (
    <div>
      <ProductDescription />
      <SizeSelect />
    </div>
  );
};

export default ProductInfo;
