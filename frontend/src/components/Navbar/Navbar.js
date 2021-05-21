import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import './Navbar.css';
import { signout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import DropdownStore from '../Dropdown/DropdownStore';
import DropdownServices from '../Dropdown/DropdownServices';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from '../../screen/HomeScreen';
import ProductScreen from '../../screen/ProductScreen';
import CartScreen from '../../screen/CartScreen';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdownstore, setDropdownstore] = useState(false);
  const [dropdownservices, setDropdownservices] = useState(false);

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

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  const onMouseEnterstore = () => {
    if (window.innerWidth < 960) {
      setDropdownstore(false) ;
    } else {
      setDropdownstore(true);
    }
  };

  const onMouseLeavestore = () => {
    
      setDropdownstore(false) ;
    
  };
  
  const onMouseEnterservice = () => {
    if (window.innerWidth < 960) {
      setDropdownservices(false) ;
    } else {
      setDropdownservices(true);
    }
  };

  const onMouseLeaveservice = () => {
    
      setDropdownservices(false) ;};
 

  return (
    /*
    <>
      <nav className='navbar'>
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
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           
          <li className='nav-item'>
              
              <Link to='cart' className='nav-links' onClick={closeMobileMenu}>
              <ShoppingBasketIcon/>
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
                    <Link to="/profile" onClick={closeMobileMenu}>User Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory" onClick={closeMobileMenu} >Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>

                </ul>
              </div>
            ) :(
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
            </li>
            

            <li 
             className='nav-item'
             onMouseEnter={onMouseEnterstore}
             onMouseLeave={onMouseLeavestore}
             >
              <Link 
                to='/Store'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 Store
              </Link>
              {dropdownstore && <DropdownStore />}
            </li>
            
          
            
        
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            
            </li>
         
          </ul>
         
          {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
          
        </div>
      
                
                
        
      </nav>
      <Route path="/cart/:id?" component={CartScreen}></Route>
    </>*/
    
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
        
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact ></Route>

          <Route path="/Store" component={HomeScreen} exact ></Route>
         
          
   
     
        </div>
       
  );
}

export default Navbar;