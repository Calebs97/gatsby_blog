import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Homepage from './views/Homepage';
import About from './views/About';
import Food from './views/Food';
import Work from './views/Work';
import Books from './views/Books';
import Contact from './views/Contact';
import Site from './views/Site';
import NotFound from './views/NotFound';
import Success from './views/Success';

ReactDOM.render(
  <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path={'/about'} component={About} />
      <Route path={'/work'} component={Work} />
      <Route path={'/food'} component={Food} />
      <Route path={'/books'} component={Books} />
      <Route path={'/contact'} component={Contact} />
      <Route path={'/site'} component={Site} />
      <Route path={'/success'} component={Success} />
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
