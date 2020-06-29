import React from 'react';
import './style.scss';

const SizeSelect = ({ selectedSize, handleSizeSelection }) => {
  const product = {
    sizes: [
      { available: false, size: 'PP', sku: '5807_343_0_PP' },
      { available: true, size: 'P', sku: '5807_343_0_P' },
      { available: true, size: 'M', sku: '5807_343_0_M' },
      { available: true, size: 'G', sku: '5807_343_0_G' },
      { available: false, size: 'GG', sku: '5807_343_0_GG' },
    ],
  };

  return (
    <section className='sizeSelect'>
      <p className='sizeSelect__title'>Escolha o tamanho</p>
      <div className='sizeSelect__sizeGroup'>
        {product.sizes.map((size) => (
          <button
            key={size.sku}
            name={size.size}
            className={`sizeSelect__box sizeSelect__box--${
              size.available ? 'available' : 'unavailable'
            }  ${selectedSize === size.size ? 'selected' : ''}`}
            aria-disabled={!size.available}
            onClick={(event) => handleSizeSelection(event)}
          >
            {size.size}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SizeSelect;
