import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import List from './containers/List';
import Quiz from './containers/Quiz';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/list" component={List} />
    <Route path="/quiz" component={Quiz} />
  </Route>
);
