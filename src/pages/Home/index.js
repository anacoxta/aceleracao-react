import React, { useState, useEffect } from 'react';
import CardProduct from '../../components/CardProduct/index'
import { getCatalog } from '../../services/catalog';

import '../defaultStyles.scss';
import './style.scss'

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then(resp => setCatalog(resp.data));
  }, []);

  return (
    <div className='pageContent pageContentHome'>
      {
        catalog && catalog.map(item => {
          return (
            <CardProduct
              key={item.code_color}
              src={item.image}
              alt={`${item.name}`}
              discountPrice={item.discount_percentage !== '' ? `${item.discount_percentage} OFF` : ''}
              className={item.on_sale ? 'discount' : 'discount--none'}
              layout='isInsideHome'
              name={item.name}
              onSale={item.on_sale}
              actualPrice={item.actual_price}
              regularPrice={item.regular_price}
              productId={item.code_color}
            />
          )
        })

      }
    </div>
  );
};

export default Home;
