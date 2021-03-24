import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Navbar />
    
    <Switch>
          <Route path='/' exact component={Home} />
          </Switch>
    </Router>
  );
}

export default App;
