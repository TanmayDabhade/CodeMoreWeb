// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Content from '../Content';

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="./src/Home" exact component={Home} />
        <Route path="./src/Content" component={Content} />
      </Switch>
    </Router>
  );
}


