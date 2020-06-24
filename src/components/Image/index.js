import React from 'react';

import './style.scss';

const Image = ({ layout, src, alt }) => {
  return (
    <figure className={layout}>
      <img src={src} alt={alt} />
    </figure>
  );
};

export default Image;
