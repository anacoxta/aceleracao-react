import React, { useState } from 'react';

import './style.scss';

const SelectUnit = () => {
  const [unitNumber, setUnitNumber] = useState(0);

  const handleMinusClick = () => {
    return unitNumber !== 0 ? setUnitNumber(unitNumber - 1) : unitNumber;
  };

  const handlePlusClick = () => {
    return unitNumber !== 5 ? setUnitNumber(unitNumber + 1) : 5;
  };

  return (
    <div className='containerUnit'>
      <button className='buttonUnit buttonUnit__fontSize--minus' onClick={handleMinusClick}>
        -
      </button>
      {
        unitNumber === 5 ? (
          <div style={{display: 'block', width: '10px'}}>
            <span className='unitNumber'>
              {unitNumber}
            </span>
            <p className='unitMessage'>Ops! Quantidade indisponível :(</p>
          </div>
        )
          : <span className='unitNumber'> {unitNumber} </span>
      }
      <button className='buttonUnit buttonUnit__fontSize--plus' onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default SelectUnit;
