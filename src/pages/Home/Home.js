import React from 'react';
import './Home.scss';
import Logo from '../../components/Logo/Logo';
import CartDesktop from '../../components/Cart/Desktop/CartDesktop'

const Home = () => {
  return (
    <div className='Home'>
      <Logo />
      <CartDesktop />
    </div>
  );
}

export default Home;
