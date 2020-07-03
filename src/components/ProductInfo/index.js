import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct } from '../../actions';
import ButtonCta from '../ButtonCta';
import SizeSelect from '../SizeSelect';
import ProductDescription from '../ProductDescription';

import './style.scss';

const ProductInfo = ({ addProduct, layout, produto }) => {
  const [selectedSize, setSelectecSize] = useState('');

  const priceNumber = produto.actual_price.split(' ');
  
  const handleSizeSelection = (event) => {
    setSelectecSize(event.target.name);
  };


  return (
    <div className='productInfo'>
      <ProductDescription
        layout={layout}
        name={produto.name}
        regularPrice={produto.regular_price}
        actualPrice={produto.actual_price}
        installments={` em até ${produto.installments}`}
        onSale={produto.on_sale}
      />
      <SizeSelect selectedSize={selectedSize} handleSizeSelection={handleSizeSelection} />
      <ButtonCta
        text='Adicionar à sacola de compras'
        layout='filled productInfo__buttonCta'
        isDisabled={selectedSize === ''}
        handleClick={() =>
          addProduct({
            ...produto,
            id: produto.code_color,
            size: selectedSize,
            price: parseFloat(priceNumber[1].replace(',', '.')),
            amount: 1,
          })
        }
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ addProduct }, dispatch);

export default connect(null, mapDispatchToProps)(ProductInfo);
