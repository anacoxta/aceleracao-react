import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import * as ServiceWorker from './serviceWorker';

import './index.scss';

import Routes from './routes';
import Loading from './components/Loading';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorker.register();
