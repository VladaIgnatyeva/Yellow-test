import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import { Info } from './pages/Info/Info';

const App = () => {
  return (
    <>
      <Router >
        <Header />
        <Route exact path='/'>

        </Route>
        <Route path='/login' component={Login} />
        <Route path='/info' component={Info} />
      </Router>
    </>
  );
}

export default App;
