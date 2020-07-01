import React from 'react';

import './style.scss';

const Image = ({ className, src, alt, discountPrice, layout }) => {
  return (
    <figure className={layout}>
      <img src={src} alt={alt} />
      <span className={className}>{discountPrice}</span>
    </figure>
  );
};

export default Image;
