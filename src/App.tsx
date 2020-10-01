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

  return (
    <>
      <Router >
        <Header setFilter={setFilter} filter={filter} />
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
          component={(props: any) => <Jogs {...props} filter={filter} />}
          path='/jogs'
        />
        <Route path='/login' component={Login} />
      </Router>
    </>
  );
}

export default App;
