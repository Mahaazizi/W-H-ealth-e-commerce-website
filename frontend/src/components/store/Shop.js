import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from '../../screen/HomeScreen';
import ProductScreen from '../../screen/ProductScreen';
import Footer from '../Footer/Footer';
import CartScreen from '../../screen/CartScreen';

import './Store.css';

function Shop() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
 return(
   <BrowserRouter>
        <div className="grid-container">
        <header className="row">
                <div>
                <Link className="brand" to="/Store">Shop Now</Link>
                </div>
                <div>
                <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
                </div>
              </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact ></Route>

          <Route path="/Store" component={HomeScreen} exact ></Route>
         
            </main>
   
        <footer className="row center">All right reserved</footer>
        <Footer/>
        </div>
        </BrowserRouter>
        );
        }
export default Shop;