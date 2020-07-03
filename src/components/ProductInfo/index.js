import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct, updateProduct } from '../../actions';
import ButtonCta from '../ButtonCta';
import SizeSelect from '../SizeSelect';
import ProductDescription from '../ProductDescription';

import './style.scss';

const ProductInfo = ({ addProduct, updateProduct, layout, produto, products }) => {
  const [selectedSize, setSelectecSize] = useState('');

  const priceNumber = produto.actual_price.split(' ');
  
  const handleSizeSelection = (event) => {
    setSelectecSize(event.target.name);
  };

  const handleClickAddProduct = () => {
    const existedProduct = products.find((product) => product.id === produto.code_color);

    if(existedProduct) {
      updateProduct({
        id: produto.code_color,
        amount: 1,
        price: parseFloat(priceNumber[1].replace(',', '.')),
      })
    } else {
      addProduct({
        ...produto,
        id: produto.code_color ,
        size: selectedSize,
        price: parseFloat(priceNumber[1].replace(',', '.')),
        amount: 1, 
      })
    };
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
        handleClick={handleClickAddProduct}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ addProduct, updateProduct }, dispatch);
const mapStateToProps = (state) => ({products: state.products});

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
