import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from '../../screen/HomeScreen';
import ProductScreen from '../../screen/ProductScreen';
import Footer from '../Footer/Footer';
import CartScreen from '../../screen/CartScreen';

import './Store.css';

function Shop() {
 return(
   <BrowserRouter>
        <div className="grid-container">
        <header className="row">
                <div>
                  <a className="brand" href="/Store">Shop Now</a>
                </div>
                <div>
                  <a href="/Cart">Cart</a>
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