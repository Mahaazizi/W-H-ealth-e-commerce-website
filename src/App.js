import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Recipe from './components/pages/Recipe';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
  <Router>
    <Navbar />
    
    <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Recipe' exact component={Recipe} />
          </Switch>
   <Footer/>

    </Router>
  );
}

export default App;
