import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
  <Router>
    <Navbar />
    
    <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Recipes' exact component={Recipes} />
          </Switch>
   <Footer/>

    </Router>
  );
}

export default App;
