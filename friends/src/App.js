import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Auth</h1>
        <Link to='/login'>Login</Link><br/>
        <Link to='/friendsList'>Friends List</Link>
        <Switch>
          <ProtectedRoute path='/friendsList' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
