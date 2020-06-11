import React, { useState, useEffect } from 'react';
import './style.scss';
import Logo from '../../components/Logo';

import { getCatalog } from '../../services/catalog';

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then((resp) => setCatalog(resp.data));
  }, []);

  return (
    <div className='home'>
      <Logo />
    </div>
  );
};

export default Home;
