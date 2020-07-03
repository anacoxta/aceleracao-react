import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getCatalog } from '../../services/catalog';
import './style.scss';

const SizeSelect = ({ selectedSize, handleSizeSelection }) => {
  const { productCode } = useParams();
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then((resp) => setCatalog(resp.data));
  }, []);
  const product = catalog.find((product) => product.code_color === productCode);

  return (
    <section className='sizeSelect'>
      <p className='sizeSelect__title'>Escolha o tamanho</p>
      {product && (
        <div className='sizeSelect__sizeGroup'>
          {product.sizes.map((product) => (
            <button
              key={product.sku}
              name={product.size}
              className={`sizeSelect__box sizeSelect__box--${
                product.available ? 'available' : 'unavailable'
              }  ${selectedSize === product.size && product.available ? 'selected' : ''}`}
              disabled={!product.available}
              onClick={(event) => {
                handleSizeSelection(event);
              }}
            >
              {product.size}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default SizeSelect;
