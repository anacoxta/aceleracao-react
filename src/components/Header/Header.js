import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo'
import CartIcon from '../Cart/CartIcon';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <CartIcon />
    </header>
  );
}

export default Header;
