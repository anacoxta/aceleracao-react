import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct } from '../../actions';
import './style.scss';

import ButtonCta from '../ButtonCta';
import ProductDescription from '../ProductDescription';
import SizeSelect from '../SizeSelect';

const product = {
  id: '20002605_613',
  name: 'Produto 1',
  size: 'PP',
  price: 20,
  amount: 1,
  installments: '3x R$ 66,63',
};

const ProductInfo = ({ addProduct }) => {
  const [selectedSize, setSelectecSize] = useState('');

  const handleSizeSelection = (event) => {
    setSelectecSize(event.target.name);
  };

  return (
    <div className='productInfo'>
      <ProductDescription {...product} />
      <SizeSelect selectedSize={selectedSize} handleSizeSelection={handleSizeSelection} />
      <ButtonCta
        text='Adicionar à sacola de compras'
        layout='filled productInfo__buttonCta'
        handleClick={() => addProduct({ ...product, size: selectedSize })}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ addProduct }, dispatch);

export default connect(null, mapDispatchToProps)(ProductInfo);
