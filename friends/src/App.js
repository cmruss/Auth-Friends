import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to='/login'>login</NavLink>
          <NavLink to='/friendslist'>friends list</NavLink>
        </nav>
        <Switch>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/friendslist' component={FriendsList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
