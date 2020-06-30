import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Image from '../../components/Image';
import ProductInfo from '../../components/ProductInfo';
import { getCatalog } from '../../services/catalog';

import '../defaultStyles.scss';
import './style.scss';

const Product = () => {
  const { productCode } = useParams();
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then(resp => setCatalog(resp.data));
  }, []);
  const produto = catalog.find(produto => produto.code_color === productCode);

  return (
    <div className='pageContent pageContentProduct'>
      {produto &&
        <>
          <Image
            src={produto.image}
            alt={produto.name}
          />
          <ProductInfo
            produto={produto}
          />
        </>}
    </div>
  );
};

export default Product;
