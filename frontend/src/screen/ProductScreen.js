import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/store/Rating';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

 return (
 
  <div>
  {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
        <div className="row top">
                  <div className="col-3">
                    <img
                      className="large"
                      src={product.image}
                      alt={product.name}
                    ></img>
                  </div>
                  <div className="col-5">
                    <ul>
                      <li>
                        <h1>{product.name}</h1>
                      </li>
                      <li>
                        <Rating
                          rating={product.rating}
                          numReviews={product.numReviews}
                        ></Rating>
                      </li>
                      <li>Prix : {product.price}DT</li>
                      <li>
                        Description:
                        <p>{product.description}</p>
                      </li>
                    </ul>
                  </div>
      
          <div className="col-4">
           <div className="card card-body">
            <ul>
             <li>
              <div className="row">
               <div>Prix</div>
               <div className="price">
                {product.price} DT
               </div>
              </div>
             </li>
             <li>
              <div className="row">
               <div>Status</div>
               <div >
                {product.countInStock > 0 ? (<span className="success">In stock</span>)
                :( <span className="error">Unavailable</span>)
                 }
               </div>
              </div>
             </li>
             <li>
              <button className="primary block">Add to cart</button>
             </li>
            </ul>
           </div>
          </div>
         </div>
        </div>
      )}
    </div>
  );
}
