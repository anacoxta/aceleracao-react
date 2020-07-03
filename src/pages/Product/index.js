import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { getCatalog } from '../../services/catalog';

import '../defaultStyles.scss';
import './style.scss';

import Image from '../../components/Image';
import ProductInfo from '../../components/ProductInfo';
import ButtonCta from '../../components/ButtonCta';
import Loading from '../../components/Loading';

const Product = () => {
  const history = useHistory();
  const { productCode } = useParams();
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then((resp) => setCatalog(resp.data));
  }, []);

  const product = catalog.find((product) => product.code_color === productCode);

  return (
    <div className='page'>
      <div className='page__button'>
        <ButtonCta
          text='Voltar para o catálogo'
          layout='default'
          handleClick={() => history.push('/')}
        />
      </div>
      <div className='page__content'>
        {product ? (
          <>
            <Image src={product.image} alt={product.name} />
            <ProductInfo product={product} />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Product;
