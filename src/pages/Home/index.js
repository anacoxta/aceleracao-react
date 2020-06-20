import React, { useState, useEffect } from 'react';
import '../defaultStyles.scss';

import { getCatalog } from '../../services/catalog';

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then((resp) => setCatalog(resp.data));
  }, []);

  return (
    <div className='pageContent'>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
