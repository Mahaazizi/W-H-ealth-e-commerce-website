import React , { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, listProducts } from '../../actions/productActions';
import { detailsUser, updateUserProfile } from '../../actions/userActions';
import { detailsProduct } from "../../actions/productActions";

const MainContent = (props) => {
 
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
console.log(userInfo)
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  
 
  const listItems = products.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.image} alt="product"></img>
      </div>
      <div className="card_header">
        <h2>{item.name} </h2>
        <p className="description">{item.description}</p>
        <p className="price">
          {item.price}
          <span>TND</span>
        </p>
        <div className="btn-card">Add to cart</div>
      </div>
    </div>
  ));
  return (
    <div className="main_content" style={{ alignItems: "stretch" }}>
      {listItems}
    </div>
  );
};
export default MainContent;
