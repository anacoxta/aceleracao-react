import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Hero from '../../components/Hero';
import CardProduct from '../../components/CardProduct/index';
import ButtonCta from '../../components/ButtonCta';
import Loading from '../../components/Loading';
import { getCatalog } from '../../services/catalog';
import { useQuery } from '../../utils/customHooks';

import '../defaultStyles.scss';
import './style.scss';

const Home = () => {
  const history = useHistory();
  const query = useQuery();
  const search = query.get('search');
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then((resp) => setCatalog(resp.data));
  }, []);

  useEffect(() => {
    if (search) {
      const results = catalog.filter((product) =>
        product.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            search
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          )
      );

      setCatalog(results);
    }
  }, [search]);

  return (
    <>
      <Hero />
      <div className='page'>
        {search && (
          <div className='page__button'>
            <ButtonCta
              text='Voltar para o catálogo'
              layout='default'
              handleClick={() => {
                setCatalog([]);
                history.push('/');
              }}
            />
          </div>
        )}

        <div className='page__content'>
          {catalog ? (
            catalog.map((item) => {
              return (
                <CardProduct
                  key={item.code_color}
                  src={item.image}
                  alt={`${item.name}`}
                  discountPrice={
                    item.discount_percentage !== '' ? `${item.discount_percentage} OFF` : ''
                  }
                  className={item.on_sale ? 'discount' : 'discount--none'}
                  layout='isInsideHome'
                  name={item.name}
                  onSale={item.on_sale}
                  actualPrice={item.actual_price}
                  regularPrice={item.regular_price}
                  productId={item.code_color}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
