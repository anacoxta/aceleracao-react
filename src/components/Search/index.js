import React, { useState } from 'react';
import Input from './Input';
import './style.scss';

const Search = () => {
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <>
      <button className='mobileSearchBtn' onClick={() => setMobileSearch(!mobileSearch)}>
        <i className='fas fa-search'></i>
      </button>
      {mobileSearch ? <Input device={'mobile'} /> : <Input device={'desktop'} />}
    </>
  );
};

export default Search;
