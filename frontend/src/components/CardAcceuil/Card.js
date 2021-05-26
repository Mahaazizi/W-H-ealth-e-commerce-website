import React from "react";
import product_card from "../store/data";

const MainContent = () => {
  const listItems = product_card.map((item) => (
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
  return <div className="main_content">{listItems}</div>;
};
export default MainContent;
