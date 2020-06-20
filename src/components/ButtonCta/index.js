import React from 'react';
import './style.scss';

const ButtonCta = ({ text, handleClick, layout }) => {
  return (
    <button className={`buttonCta buttonCta--${layout}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonCta;
