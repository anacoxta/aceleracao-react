import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct, updateProduct } from '../../actions';
import ButtonCta from '../ButtonCta';
import SizeSelect from '../SizeSelect';
import ProductDescription from '../ProductDescription';

import './style.scss';

const ProductInfo = ({ addProduct, updateProduct, layout, product, products }) => {
  const [selectedSize, setSelectecSize] = useState('');

  const priceNumber = product.actual_price.split(' ');

  const handleSizeSelection = (event) => {
    setSelectecSize(event.target.name);
  };

  const handleClickAddProduct = () => {
    const existedProduct = products.find((product) => product.id === product.code_color);

    if (existedProduct) {
      updateProduct({
        id: product.code_color,
        amount: 1,
        price: parseFloat(priceNumber[1].replace(',', '.')),
      });
    } else {
      addProduct({
        ...product,
        id: product.code_color,
        size: selectedSize,
        price: parseFloat(priceNumber[1].replace(',', '.')),
        amount: 1,
      });
    }
  };

  return (
    <div className='productInfo'>
      <ProductDescription
        layout={layout}
        name={product.name}
        regularPrice={product.regular_price}
        actualPrice={product.actual_price}
        installments={` em até ${product.installments}`}
        onSale={product.on_sale}
      />
      <SizeSelect selectedSize={selectedSize} handleSizeSelection={handleSizeSelection} />
      <ButtonCta
        text='Adicionar à sacola de compras'
        layout='filled productInfo__buttonCta'
        handleClick={handleClickAddProduct}
        isDisabled={selectedSize === ''}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addProduct, updateProduct }, dispatch);
const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
