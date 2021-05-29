import React , { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Axios from "axios";

const MainContent = (props) => {
 
 
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [product, setproduct] = useState([]);


  const getproduct = async (type) => {
    const res = await Axios.get("http://localhost:5000/api/products",  {headers: {Authorization: 'Bearer 73Ntx3b6SwNXC7ANV3tw4wFfDdKntB26',
    "Access-Control-Allow-Origin": "*",
    mode: "cors",               
}});
  const products = res.data; 
  const f =products.filter(item =>{
     {return item.type == type}
    
  })
  console.log('products',f)
    setproduct(f);
  }

  
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo.healthy) getproduct("healthy");
      else if (userInfo.proteine) getproduct("protein");
      else if (userInfo.weight) getproduct("weightLoss");

    }
  }, []);



 
 
   const listItems = product.map((item) => (
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
