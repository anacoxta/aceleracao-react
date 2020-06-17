import React, { useState } from 'react';

import './style.scss';

const SelectUnit = () => {
  const [unitNumber, setUnitNumber] = useState(0)

  const handleMinusClick = () => {
    return unitNumber !== 0 ? setUnitNumber(unitNumber - 1) : unitNumber
  }

  const handlePlusClick = () => {
    setUnitNumber(unitNumber + 1)
  }

  return (
    <div className='containerUnit'>
      <button className='buttonUnit buttonUnit__fontSize--minus' onClick={handleMinusClick}>
        -
      </button>
      <span> {unitNumber} </span>
      <button className='buttonUnit buttonUnit__fontSize--plus' onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default SelectUnit;
