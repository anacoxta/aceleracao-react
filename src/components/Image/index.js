import React from 'react';

import './style.scss';

const Image = ({ className, src, alt, discount }) => {
  return src !== '' ? (
    <figure className='productImage'>
      {discount !== '' && <span className='productImage__badge'>{discount} OFF</span>}
      <img src={src} alt={`Produto ${alt}`} title={alt} />
    </figure>
  ) : (
    <div className='productImage--empty'>
      <i className='far fa-image'></i>
    </div>
  );
};

export default Image;
