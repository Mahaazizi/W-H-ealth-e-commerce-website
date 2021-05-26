import React from 'react';
import './App.css';
import Navbar from './components/store/Shop';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Recipe from './components/pages/Recipe';
import Store from './components/pages/Store';
import SigninScreen from './screen/SigninScreen';
import RegisterScreen from './screen/RegisterScreen';
import ShippingAddressScreen from './screen/ShippingAddressScreen';
import PaymentMethodScreen from './screen/PaymentMethodScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import OrderHistoryScreen from './screen/OrderHistoryScreen';
import AdminRoute from './components/AdminRoute';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import OrderScreen from './screen/OrderScreen';
import ProfileScreen from './screen/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import ProductListScreen from './screen/ProductListScreen';
import ProductEditScreen from './screen/ProductEditScreen';

function App() {
  return (
  <Router>
    <Navbar />
    
    <Switch>
          
          <Route path='/Recipe' exact component={Recipe} />
          <Route path='/Store' exact component={Store} />
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/profile" component={ProfileScreen}></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
            <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
          <Route path='/' exact component={Home} />
          </Switch>
          <Footer />
    </Router>
  );
}

export default App;
