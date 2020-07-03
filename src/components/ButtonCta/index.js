import React from 'react';
import './style.scss';

const ButtonCta = ({ text, handleClick, layout, isDisabled }) => {
  return (
    <button
      className={`buttonCta buttonCta--${layout}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default ButtonCta;
