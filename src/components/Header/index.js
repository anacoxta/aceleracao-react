import React, { useState } from 'react';
import './style.scss';
import Logo from '../Logo';
import CartBtn from '../Cart/Button';
import CartContainer from '../Cart/Container';
import Search from '../Search';

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
