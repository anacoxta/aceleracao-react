import React, { useState } from 'react';
import './Header.css';
import Logo from '../Logo/Logo'
import CartBtn from '../Cart/Button/CartBtn';
import CartDesktop from '../Cart/Desktop/CartDesktop'

const Header = () => {
  const [ activeCart, setActiveCart ] = useState(false)

  return (
    <header className='header'>
      <Logo />
      <div className='header__btnContainer'>
        <CartBtn activeCart={activeCart} setActiveCart={setActiveCart} />
      </div>
      <CartDesktop active={activeCart} />
    </header>
  );
}

export default Header;
