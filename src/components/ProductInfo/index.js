import React from 'react';
import './style.scss';

import ButtonCta from '../ButtonCta';
import ProductCartDescription from '../ProductCartDescription';
import SizeSelect from '../SizeSelect';

import { handleBagBtn } from '../../../utils/buttonFunctions';

const ProductInfo = () => {
  return (
    <div className='productInfo'>
      <ProductCartDescription />
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
