import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Recipe from './components/pages/Recipe';
import Store from './components/pages/Store';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Navbar />
    
    <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Recipe' exact component={Recipe} />
          <Route path='/Store' exact component={Store} />
          </Switch>

    </Router>
  );
}

export default App;
