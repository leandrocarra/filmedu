import React from 'react';
import { Route } from 'react-router-dom';
 
import LayoutDefault  from '../pages/Layouts'

export default function RouteWrapper({
  component: Component,
  ...rest
}) {

  return (
    <Route {...rest}
      render={props => (
        <LayoutDefault>
          <Component {...props} />
        </LayoutDefault>
      )}
    />
  );
}
