import React from 'react';

import './style.scss';

const Image = ({ className, src, alt, discount }) => {
  return (
    <figure className='productImage'>
      {discount !== '' && <span className='productImage__badge'>{discount} OFF</span>}
      <img src={src} alt={`Produto ${alt}`} title={alt} />
    </figure>
  );
};

export default Image;
