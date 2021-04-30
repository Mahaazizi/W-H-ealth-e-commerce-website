import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './Store.css';


export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`} >
        <img className="medium" src={product.image} alt={product.name} />
        
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h5>{product.name}</h5>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">{product.price} DT</div>
         
        </div>
      </div>
    </div>
  );
}