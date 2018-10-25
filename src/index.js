import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Index from './pages/Index';
import About from './pages/About';
import Food from './pages/Food';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Site from './pages/Site';

ReactDOM.render(
  <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path={'/about'} component={About} />
      <Route path={'/work'} component={Work} />
      <Route path={'/food'} component={Food} />
      <Route path={'/contact'} component={Contact} />
      <Route path={'/work'} component={Work} />
      <Route path={'/site'} component={Site} />
      {/* <Route component={NotFound} status={404} /> */}
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
