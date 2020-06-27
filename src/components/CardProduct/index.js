import React, { useEffect, useState } from 'react';
import './style.scss';
import { getCatalog } from '../../services/catalog';

// const API = axios.create();


const CardProduct = () => {
  const [catalog, setCatalog] = useState([]);


  useEffect(() => {
    getCatalog().then((resp) => setCatalog(resp.data));
  }, []);
  console.log(catalog)

  return (
    <ul className='cardProductList'>
      {catalog.map(data => (
        <li key={data.code_color} className='cardProductDefault' aria-labelledby='product-description'>
          <span id='product-description'></span>
          <a href='#' className='cardProductDefault__info' aria-label='Detalhe do produto'>
            <div className='cardProductDefault__inner'>
              <img src={data.image} alt={'alt'} />
              <div className='cardProductDefault__inner cardProductDefault__inner--priceDiscount noDiscount'>
                <h3>{data.discount_percentage}</h3>
              </div>
              <div className='cardProductDefault__inner cardProductDefault__inner--pricing'>
                {/* <ProductDescription /> */}
                <h2>{data.name}</h2>
                <p>
                  {data.regular_price} <span className='noRemarcable'>{data.actual_price}</span>
                </p>
              </div>
            </div>
          </a>
        </li>
      ))}

    </ul>
  );
};

export default CardProduct;
