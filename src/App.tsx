import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import { Info } from './pages/Info/Info';
import PrivateRoute from './utils/PrivateRoute';
import { Jogs } from './pages/Jogs/Jogs';
import { IFilter } from './utils/types'

const App = () => {

  const [filter, setFilter] = useState({
    from: '',
    to: ''
  } as IFilter);

  const [isAuth, setAuth] = useState(localStorage.getItem('token') ? true : false);
  
  return (
    <>
      <Router >
        <Header setFilter={setFilter} filter={filter} isAuth={isAuth} />

        <PrivateRoute
          exact
          path="/"
          component={(props: any) => <Jogs {...props} filter={filter} />}
        />
        <PrivateRoute
          exact
          path="/info"
          component={Info}
        />
        <PrivateRoute
          exact
          component={(props: any) => <Jogs {...props} filter={filter} />}
          path='/jogs'
        />
        <PrivateRoute
          exact
          component={(props: any) => null}
          path='/contacts'
        />
        <Route
          component={(props: any) => <Login {...props} setAuth={setAuth} />}
          path='/login'
        />
      </Router>
    </>
  );
}

export default App;
