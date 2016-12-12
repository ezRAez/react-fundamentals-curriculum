import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/Main';
import GetWeatherContainer from '../containers/GetWeatherContainer';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={GetWeatherContainer} />
    </Route>
  </Router>
);

export default routes;
