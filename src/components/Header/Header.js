import React, { useState } from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import CartBtn from '../Cart/Button/CartBtn';
import CartContainer from '../Cart/Container/CartContainer';
import Search from '../Search/Search';

const Header = () => {
  const [activeCart, setActiveCart] = useState(false);

  return (
    <header className='header'>
      <Logo />
      <div className='header__btnContainer'>
        <Search />
        <CartBtn activeCart={activeCart} setActiveCart={setActiveCart} />
      </div>
      <CartContainer activeCart={activeCart} setActiveCart={setActiveCart} />
    </header>
  );
};

export default Header;
