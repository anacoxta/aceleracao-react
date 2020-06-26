import React, { useState } from 'react';
import './style.scss';
import ProductDescription from '../../ProductDescription';
import Image from '../../Image';
import SelectUnit from '../../SelectUnit';
import ProductPhoto from '../../../assets/product.png';

const ProductBox = ({ product }) => {
  const [amount, setAmount] = useState(product.amount);

  const handleMinusClick = () => (amount !== 0 ? setAmount(amount - 1) : amount);

  const handlePlusClick = () => (amount !== 5 ? setAmount(amount + 1) : 5);

  return (
    <div className='productBox'>
      <Image className='product__cart' src={ProductPhoto} />
      <div className='productBox__text'>
        <ProductDescription layout='isInsideCart' {...product} />
        <div>
          <p className='productBox__size'>Tamanho: {product.size}</p>
        </div>
        <SelectUnit
          amount={amount}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
        />
        <button className='productBox__removeItemBtn'>Remover Produto</button>
      </div>
    </div>
  );
};

export default ProductBox;
