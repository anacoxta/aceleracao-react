import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__leftBlock'>
        <span className='footer__leftBlock__text footer__leftBlock__text--course'>
          Aceleração React Women
        </span>
        <span className='footer__leftBlock__text footer__leftBlock__text--divider'>
          &nbsp;|&nbsp;
        </span>
        <span className='footer__leftBlock__text footer__leftBlock--sponsors'>
          <a className='link' href='https://codenation.dev/'>
            Codenation
          </a>
          &nbsp;+&nbsp;
          <a className='link' href='https://loft.com.br/'>
            Loft
          </a>
        </span>
      </div>
      <a className='footer__rightBlock link' href='https://github.com/anacoxta/aceleracao-react'>
        <i className='footer__rightBlock__icon fab fa-github'></i>
      </a>
    </footer>
  );
};

export default Footer;
