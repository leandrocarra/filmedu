import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';


import Home from '../pages/Home'
import Detail from '../pages/Detail'
import SearchResult from '../pages/SearchResult'


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:movieId" component={Detail} />
      <Route path="/result/:query/:page" component={SearchResult} />
      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
