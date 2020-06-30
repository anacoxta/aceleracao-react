import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import * as ServiceWorker from './serviceWorker';

import './index.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import Loading from './components/Loading';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Header />
        <Routes />
        <Footer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

ServiceWorker.register();
