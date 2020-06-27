import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import CardProduct from '../../components/CardProduct/index'
import { getCatalog } from '../../services/catalog';

import '../defaultStyles.scss';
import './index.scss'

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then(resp => setCatalog(resp.data));
  }, []);

  return (
    <div className='pageContent'>
      {
        catalog && catalog.map(item => {
          return(
            // <Link to={`/product/${item.code_color}`}>
              <CardProduct
                key={item.code_color}
                src={item.image}
                alt={`${item.name}`}
                discountPrice={item.discount_percentage !== '' ? `${item.discount_percentage} OFF` : ''}
                className={item.on_sale ? 'discount' : 'discount--none'}
                name={item.name}
                // price={item.discount_percentage !== '' ? `${item.actual_price} ${item.regular_price}` : item.regular_price}
                classNameDescription={item.on_sale ? 'price--line' : null}
                actualPrice={item.on_sale ? `${item.actual_price} ${item.regular_price}` : ''}
                regularPrice={item.on_sale ? '' : item.regular_price}
              />
            // </Link>
          )
        })
        
      }
    </div>
  );
};

export default Home;
