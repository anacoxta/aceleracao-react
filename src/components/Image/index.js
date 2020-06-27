import React from 'react';

import './style.scss';

const Image = ({ className, src, alt, discountPrice }) => {
  return (
    <figure>
      <img src={src} alt={alt}/>
      <span className={className}>{discountPrice}</span>
    </figure>
  );
};

export default Image;