import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HomeScreen from '../../screen/HomeScreen';
import ProductScreen from '../../screen/ProductScreen';
import Footer from '../Footer/Footer';
import CartScreen from '../../screen/CartScreen';
import { signout } from '../../actions/userActions';
import OrderHistoryScreen from '../../screen/OrderHistoryScreen';
import ProfileScreen from '../../screen/ProfileScreen';
import logo from '../../assets/logo.png';

import './Store.css';

function Shop() {
  const [click, setClick] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  
   

 

 return(
   
        <div className="grid-container">
        <header className="row">
        <div className='navbar-container'>
          <img className='navbar-logo' onClick={closeMobileMenu}
          src={logo}
          hight= "50"
          width="50"
          alt="site logo"
        />
  
          <Link  to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Health is Wealth
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          </div>
                <div>
                <Link className="brand" to="/Store">Shop Now</Link>
                </div>
                <div>
                <Link className="brand" to="/Recipe">Recipes</Link>
                </div>
               
                
                <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>

                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
                
                
              </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact ></Route>

          <Route path="/Store" component={HomeScreen} exact ></Route>
         
            </main>
   
     
        </div>
      
        );
        }
export default Shop;