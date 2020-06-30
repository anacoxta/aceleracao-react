import React from 'react';

import './style.scss';

const SelectUnit = ({ amount, handleMinusClick, handlePlusClick }) => {
  return (
    <div className='containerUnit'>
      <button className='buttonUnit buttonUnit__fontSize--minus' onClick={handleMinusClick}>
        -
      </button>
      {amount === 5 ? (
        <div style={{ display: 'block', width: '10px' }}>
          <span className='unitNumber'>{amount}</span>
          <p className='unitMessage'>Ops! Quantidade indisponível :(</p>
        </div>
      ) : (
        <span className='unitNumber'> {amount} </span>
      )}
      <button className='buttonUnit buttonUnit__fontSize--plus' onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default SelectUnit;
