import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Routes from './routes';
import { Store } from './store';
import * as ServiceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Routes />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorker.register();
