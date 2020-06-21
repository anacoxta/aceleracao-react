import React from 'react';
import './style.scss';

import ButtonCta from '../ButtonCta';
import ProductDescription from '../ProductDescription';
import SizeSelect from '../SizeSelect';

import { handleBagBtn } from '../../../utils/buttonFunctions';

const ProductInfo = () => {
  return (
    <div className='productInfo'>
      <ProductDescription />
      <SizeSelect />
      <ButtonCta
        text='Adicionar à sacola de compras'
        layout='filled productInfo__buttonCta'
        handleClick={handleBagBtn}
      />
    </div>
  );
};

export default ProductInfo;
