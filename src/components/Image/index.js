import React from 'react';
import Placeholder from '../../assets/placeholder-bg.png';

import './style.scss';

const Image = ({ className, src, alt, discountPrice }) => {
  let picture;
  if (src && src !== '') {
    picture = <img src={src} alt={alt} />;
  } else {
    picture = <img src={Placeholder} alt={alt} />;
  }

  return (
    <figure>
      {picture}
      <span className={className}>{discountPrice}</span>
    </figure>
  );
};

export default Image;
