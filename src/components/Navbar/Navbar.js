import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import logo from '../../assets/logo.png';
import DropdownStore from '../Dropdown/DropdownStore';
import DropdownServices from '../Dropdown/DropdownServices';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdownstore, setDropdownstore] = useState(false);
  const [dropdownservices, setDropdownservices] = useState(false);


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
           


            <li 
             className='nav-item'
             onMouseEnter={onMouseEnterstore}
             onMouseLeave={onMouseLeavestore}
             >
              <Link 
                smooth to='#store'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                 Store <i className='fas fa-caret-down' />
              </Link>
              {dropdownstore && <DropdownStore />}
            </li>
            
            
            <li 
             className='nav-item'
             onMouseEnter={onMouseEnterservice}
             onMouseLeave={onMouseLeaveservice}
             >
              <Link
                smooth to='#services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Services <i className='fas fa-caret-down' />
              </Link>
              {dropdownservices && <DropdownServices />}
            </li>
            <li className='nav-item' >
              <Link

                smooth to='#contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact us
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <ShoppingBasketIcon/>
              </Link>
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
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;