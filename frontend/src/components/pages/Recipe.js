import React, { useState, useEffect } from "react";
import "./Recipes.css";
import Header from "../Recipes/Header";
import Recipes from "../Recipes/Recipes";
import Axios from "axios";
import Footer from "../Footer/Footer";

function Recipe() {
  const [search, setSerach] = useState();
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };
  useEffect(() => {
    getRecipes();
  }, []);
  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
      <Footer />
    </div>
  );
}

export default Recipe;
