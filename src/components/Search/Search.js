import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
  const [ mobileSearchContainer, setMobileSearchContainer ] = useState(false)

  return (
    <div>
      <button className='mobileSearchBtn' onClick={() => setMobileSearchContainer(!mobileSearchContainer)}>
        <i className='fas fa-search'></i>
      </button>
      <div className='desktopSearchContainer'>
        <label id='inputSearch' className='desktopSearchContainer__inputSearch'>
          <input type='text'/>
          <button className=''>
            <i className='fas fa-search'></i>
          </button>
        </label>
      </div>

      { mobileSearchContainer &&
        <div className='mobileSearchContainer'>
          <label id='inputSearch' className='mobileSearchContainer__inputSearch'>
            <input type='text'/>
            <button className=''>
              <i className='fas fa-search'></i>
            </button>
          </label>
        </div>
      }
    </div>
  );
}

export default Search;
