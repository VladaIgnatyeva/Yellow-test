import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import { Info } from './pages/Info/Info';
import PrivateRoute from './utils/PrivateRoute';
import { Jogs } from './pages/Jogs/Jogs';


const App = () => {

  return (
    <>
      <Router >
        <Header />
        <PrivateRoute
          exact
          path="/"
          component={Jogs}
        />
        <PrivateRoute
          exact
          path="/info"
          component={Info}
        />
        <PrivateRoute
          component={(props: any) => <Jogs {...props} />}
          path='/jogs'
        />

        <Route path='/login' component={Login} />
      </Router>
    </>
  );
}

export default App;
