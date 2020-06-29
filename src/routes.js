import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Product = React.lazy(() => import('./pages/Product'));

const Routes = () => (
  <Suspense fallback='Carregando...'>
    <Router>
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/product/:productCode' component={() => <Product />} />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
