import React, { useState, useEffect } from "react";
import "../../App.css";
import Slider from "../Slide/slider";

import Axios from "axios";

function AcceuilRecipes() {
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const getRecipes = async (type) => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${type}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo.healthy) getRecipes("healthy");
      else if (userInfo.proteine) getRecipes("protein");
      else if (userInfo.weight) getRecipes("weightLoss");
    }
  }, []);

  return (
    <div className="App">
      <div className="container-acceuil">
        <Slider recipes={recipes} />
      </div>
    </div>
  );
}

export default AcceuilRecipes;
