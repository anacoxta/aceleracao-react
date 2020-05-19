import React from 'react';
import './Home.scss';
import Logo from '../../components/Logo/Logo';
import ProductDescription from '../../components/ProductDescription/ProductDescription';

const Home = () => {
  return (
    <div className='Home'>
      <Logo />
      <ProductDescription />
    </div>
  );
}

export default Home;
