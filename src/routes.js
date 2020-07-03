import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./pages/Home'));
const Product = React.lazy(() => import('./pages/Product'));

const Routes = () => (
  <Suspense fallback='Carregando...'>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/product/:productCode' component={() => <Product />} />
      </Switch>
      <Footer />
    </Router>
  </Suspense>
);

export default Routes;
