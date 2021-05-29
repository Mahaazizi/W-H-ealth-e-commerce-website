import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import React from "react";
import HomeScreen from "../../screen/HomeScreen";
import ProductScreen from "../../screen/ProductScreen";
import CartScreen from "../../screen/CartScreen";
import { signout } from "../../actions/userActions";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";

import "./Store.css";

function Shop() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="grid-container">
      <header className="row">
        <div className="navbar-container">
          <img
            className="navbar-logo"
            src={logo}
            hight="50"
            width="50"
            alt="site logo"
          />

          <Link to="/" className="navbar-logo">
            Health is Wealth
          </Link>
        </div>
        <div>
          <Link className="brand" to="/Store">
            <i class="fas fa-store"></i>
            Store
          </Link>
        </div>
        <div>
          <Link className="brand" to="/Recipe">
            <i class="fas fa-utensils"></i>
            Recipes
          </Link>
        </div>

        <Link to="/cart">
          <i class="fas fa-shopping-cart"></i>
          Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>
        {userInfo ? (
          <div className="dropdown">
            <Link to="#">
              <i className="fas fa-user-check"></i>
              {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
            </Link>

            <ul className="dropdown-content">
              <li>
                <Link to="/profile">User Profile</Link>
              </li>
              <li>
                <Link to="/orderhistory">Order History</Link>
              </li>
              <li>
                <Link to="/" onClick={signoutHandler}>
                  <i className="fas fa-sign-out-alt"></i>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/signin">Sign In</Link>
            <i className="fas fa-sign-in-alt"></i>
          </div>
        )}
        {userInfo && userInfo.isAdmin && (
          <div className="dropdown">
            <Link to="#admin">
              <i className="fas fa-user-cog"></i>
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
        <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Route path="/Store" component={HomeScreen} exact></Route>
      </main>
    </div>
  );
}
export default Shop;
