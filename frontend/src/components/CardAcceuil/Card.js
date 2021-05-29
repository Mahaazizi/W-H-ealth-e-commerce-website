import React from "react";
import { useSelector } from "react-redux";

const MainContent = (props) => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const listItems = products.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.image} alt="product"></img>
      </div>
      <div className="card_header">
        <h2>{item.name} </h2>
        <p className="brand">{item.brand}</p>
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
