import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/Header'
import Footer from './components/Footer';
import Routes from './routes';
import { Store } from './store';
import * as ServiceWorker from './serviceWorker';

import './index.scss';

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
