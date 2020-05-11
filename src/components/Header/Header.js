import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo'
import CartBtn from '../Cart/Button/CartBtn';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <div className='header__btnContainer'>
        <CartBtn />
      </div>
    </header>
  );
}

export default Header;
