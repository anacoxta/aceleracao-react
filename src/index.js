import React from 'react';
import ReactDOM from 'react-dom';
import * as ServiceWorker from './serviceWorker';
import './index.scss';

import Routes from './routes';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorker.register();
