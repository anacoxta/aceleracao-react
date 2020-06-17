import React from 'react';

import './style.scss';

const SelectUnit = () => {
  return (
    <div className='containerUnit'>
      <button className='buttonUnit buttonUnit__fontSize--minus'>
        -
      </button>
      <span> 2 </span>
      <button className='buttonUnit buttonUnit__fontSize--plus'>
        +
      </button>
    </div>
  );
};

export default SelectUnit;
