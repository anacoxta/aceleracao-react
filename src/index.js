import React from 'react';
import ReactDOM from 'react-dom';
import * as ServiceWorker from './serviceWorker';
import './index.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Header />
      <Routes />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorker.register();
