import React from 'react';
import data from '../components/store/data';
import Rating from '../components/store/Rating';


export default function ProductScreen(props) {
 const product= data.products.find(x => x._id === props.match.params.id );
 if (!product){
  return <div>Product not found !!</div>;
 }
 return (
  <>
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
   
  </>
 )
}
