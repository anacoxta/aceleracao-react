import React, { useState, useEffect } from 'react';
import '../defaultStyles.scss';

import CardProduct from '../../components/CardProduct/index'
import { getCatalog } from '../../services/catalog';

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getCatalog().then((resp) => setCatalog(resp.data));
  }, []);

  return (
    <div className='pageContent'>
      <CardProduct />
    </div>
  );
};

export default Home;
