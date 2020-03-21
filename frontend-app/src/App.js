import React, {Component} from 'react';
import './App.css';

import User from './User'
import Show from './Show'
import Types from './Types'
import Customer from './Customer'

import {Route, Link, Redirect, Switch, withRouter} from "react-router-dom"

class App extends Component {
  render(){
    return (
      <body class="App">
        <header>Show Management Application</header>
        <div class="App-body">
          <main class="App-content">Main Content
            <Switch>
              <Route
                path="/user" 
                component={User}
                />
              <Route
                path="/show" 
                component={Show}
                />
              <Route
                path="/types" 
                component={Types}
                />
              <Route
                path="/customer" 
                component={Customer}
                />
            </Switch>
          </main>
          <nav class="App-nav">
            <h1>Navigation</h1>
              <ul>
                <li><Link to="/show">Show</Link></li>
                <li><Link to="/types">Show types</Link></li>
                <li><Link to="/customer">Customers</Link></li>
                <li><Link to="/user">User</Link></li>
                <li>Equipment</li>
              </ul> 
          </nav>
          <aside class="App-sidebar">Show List
            <ul>
              <li>Status</li>
              <li>Type</li>
              <li>Date</li>
            </ul>
          </aside>
        </div>
        <footer>Footer</footer>
      </body>
    );
  }
  
}

export default withRouter(App);
