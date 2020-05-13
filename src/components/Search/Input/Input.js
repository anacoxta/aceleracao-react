import React from 'react'
import './Input.scss'

const Input = ({ device }) => {
  return (
    <div className={`${device}SearchContainer`}>
      <label id='inputSearch' className={`${device}SearchContainer__inputSearch`}>
        <input type='text'/>
        <button>
          <i className='fas fa-search'></i>
        </button>
      </label>
    </div>
  );
}

export default Input;
