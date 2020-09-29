import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import { Info } from './pages/Info/Info';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  return (
    <>
      <Router >
        <Header />
        <PrivateRoute
          exact
          path="/"
          component={Info}
        />
        <PrivateRoute
          exact
          path="/info"
          component={Info}
        />
        <Route path='/login' component={Login} />
      </Router>
    </>
  );
}

export default App;
