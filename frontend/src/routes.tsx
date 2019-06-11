import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('./pages/Home'));
const PokemonDetails = lazy(() => import('./pages/PokemonDetails'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pokemon/:id" component={PokemonDetails} />
    </Switch>
  </Suspense>
);

export default routes;
