import React, { useState, useEffect, useMemo } from 'react';
import './style.scss';

import { getCatalog } from '../../../services/catalog';
import { withRouter, useHistory, useLocation } from 'react-router-dom';

import Item from '../Item';

const Input = ({ device }) => {
  const history = useHistory();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      getCatalog().then((resp) => setCatalog(resp.data));
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      setSearchResults([]);

      if (searchTerm !== '') {
        history.push(`/?search=${searchTerm}`);
      } else {
        history.push('/');
      }
    }
  };

  useEffect(() => {
    let results = [];

    if (searchTerm !== '') {
      results = catalog.filter((product) =>
        product.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            searchTerm
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          )
      );
    }

    setSearchResults(results);
  }, [searchTerm, catalog]);

  useEffect(() => {
    if (location.search === '') {
      setSearchTerm('');
    }
  }, [location]);

  return (
    <div className={`${device}SearchContainer`}>
      <label id='inputSearch' className={`${device}SearchContainer__inputSearch`}>
        <input
          type='text'
          placeholder='Pesquisar'
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={(event) => handleClick(event)}
        />
        <button onClick={(event) => handleClick(event)}>
          <i className='fas fa-search'></i>
        </button>
      </label>
      {searchResults.length > 0 && (
        <ul className='productsList'>
          {searchResults.map((item) => (
            <Item key={item.code_color} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default withRouter(Input);
