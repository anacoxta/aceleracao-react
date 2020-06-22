import React, { useState, useEffect } from 'react';
import '../defaultStyles.scss';
import './style.scss';

import Image from '../../components/Image';
import ProductCatalogDescription from '../../components/ProductCatalogDescription';

import { getCatalog } from '../../services/catalog';

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then((resp) => setCatalog(resp.data));
  }, []);

  return (
    <div className='pageContent home'>
      {catalog.map((product, index) => {
        return (
          <div className='productContainer'>
            <a href={`product/${product.code_color}`} className='productContainer__link'>
              <Image
                src={product.image}
                alt={product.name}
                discount={product.discount_percentage}
              />
              <ProductCatalogDescription
                name={product.name}
                regular_price={product.on_sale ? product.regular_price : ''}
                actual_price={product.actual_price}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
