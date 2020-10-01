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

  const [isActiveFilter, setActiveFilter] = useState(false);
  const [filter, setFilter] = useState({
    from: '',
    to: ''
  } as IFilter);

  const [isAuth, setAuth] = useState(localStorage.getItem('token') ? true : false);

  return (
    <>
      <Router >
        <PrivateRoute
          exact
          path="/"
          component={Jogs}
          setFilter={setFilter}
          filter={filter}
          isAuth={isAuth}
          isActiveFilter={isActiveFilter}
          setActiveFilter={setActiveFilter}
        />
        <PrivateRoute
          exact
          path="/info"
          component={Info}
          setFilter={setFilter}
          filter={filter}
          isAuth={isAuth}
          isActiveFilter={isActiveFilter}
          setActiveFilter={setActiveFilter}
        />
        <PrivateRoute
          exact
          component={(props: any) => <Jogs {...props} filter={filter} />}
          path='/jogs'
          setFilter={setFilter}
          filter={filter}
          isAuth={isAuth}
          isActiveFilter={isActiveFilter}
          setActiveFilter={setActiveFilter}
        />
        <Route
          component={(props: any) => <Login {...props} setAuth={setAuth} />}
          path='/login'
          setFilter={setFilter}
          filter={filter}
          isAuth={isAuth}
          isActiveFilter={isActiveFilter}
          setActiveFilter={setActiveFilter}
        />
      </Router>
    </>
  );
}

export default App;
