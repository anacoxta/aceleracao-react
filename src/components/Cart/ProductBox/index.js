import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProduct, removeProduct } from '../../../actions';
import Image from '../../Image';
import SelectUnit from '../../SelectUnit';
import ProductDescription from '../../ProductDescription';

import './style.scss';

const ProductBox = ({ product, updateProduct, removeProduct }) => {

  const handleMinusClick = () => {
    if (product.amount - 1 > 0) {
      updateProduct({
        id: product.id,
        amount: -1,
        price: product.price,
      });

    } else {
      removeProduct({ id: product.id });
    }
  };

  const handlePlusClick = () => {
    if (product.amount !== 5) {
      updateProduct({
        id: product.id,
        amount: 1,
        price: product.price,
      });

    }
  };

  return (
    <div className='productBox product__cart'>
      <Image src={product.image} />
      <div className='productBox__text'>
        <ProductDescription
          layout='isInsideCart'
          name={product.name}
          actualPrice={product.actual_price}
          regularPrice={product.regular_price}
          installments={` em até ${product.installments}`}
          onSale={product.on_sale}
        />
        <div>
          <p className='productBox__size'>Tamanho: {product.size}</p>
        </div>
        <SelectUnit
          amount={product.amount}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
        />
        <button
          className='productBox__removeItemBtn'
          onClick={() => removeProduct({ id: product.id })}
        >
          Remover Produto
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateProduct, removeProduct }, dispatch);

export default connect(null, mapDispatchToProps)(ProductBox);
