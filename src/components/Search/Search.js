import React from 'react';
import './Search.scss';

const Search = ({ activeCart, setActiveCart }) => {
  return (
    // <div>
      <label for='inputSearch' className='inputSearch'>
        <input type='text' id='inputSearch'/>
        <button className=''>
          <i className='fas fa-search'></i>
        </button>
      </label>
    // </div>
  );
}

export default Search;
