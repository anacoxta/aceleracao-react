import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './style.scss';

import Image from '../../Image';

const Item = ({ item }) => {
  return (
    <li key={item.code_color}>
      <Link className='item' to={`/product/${item.code_color}`}>
        <Image layout='product__search' src={item.image} />
        <span className='infos'>
          <p>{item.name}</p>
          <p>
            <span
              className={
                item.actual_price !== item.regular_price ? 'price price--special' : 'price'
              }
            >
              {item.actual_price}
            </span>
            {item.actual_price !== item.regular_price && (
              <span className='price--line'>{item.regular_price}</span>
            )}
          </p>
        </span>
      </Link>
    </li>
  );
};

export default withRouter(Item);
