import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Catalog from './components/Catalog';
import Product from './components/Product';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </div>
    );
  }
}

export default App;
