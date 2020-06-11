import React, { useState, useEffect } from 'react';
import './Home.scss';
import Logo from '../../components/Logo/Logo';
import { getCatalog } from '../../services/catalog'

const Home = () => {
  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    getCatalog()
      .then(resp => setCatalog(resp.data));
  }, []);

  return (
    <div className='home'>
      <Logo />
    </div>
  );
};

export default Home;
