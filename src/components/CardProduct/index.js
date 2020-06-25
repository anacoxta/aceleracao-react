import React, { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios'

const API = axios.create();


const CardProduct = () => {
  const [pageData, setData] = useState([]);
  useEffect(() => {
    API.get("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
      .then(
        ({ data }) => setData(data)
      );
  });
  return (
    <ul className='cardProductList'>
      {pageData.map(data => (
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
