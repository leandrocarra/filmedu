import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';


import Home from '../pages/Home'
import Detail from '../pages/Detail'


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail" component={Detail} />
      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
