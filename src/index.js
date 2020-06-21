import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Routes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
