import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import Dropdown from '../Dropdown/Dropdown';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);


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


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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
  
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Health is Wealth
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <i class="fas fa-home"></i>
              Home
              </Link>
            </li>


            <li 
             className='nav-item'
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             >
              <Link
                id="store"
                to='/store'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fas fa-store"></i> Store <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            
            
            <li 
             className='nav-item'
             
             >
              <Link
                id="service"
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               <i class="fas fa-concierge-bell"></i> Services <i className='fas fa-caret-down' />
              </Link>
              
            </li>
            <li className='nav-item' >
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fas fa-phone-volume"></i>Contact us
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