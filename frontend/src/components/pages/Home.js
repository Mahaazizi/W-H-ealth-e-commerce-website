import React from "react";
import "../../App.css";
import { ServiceObjOne, ServiceObjTwo, ServiceObjThree } from "./data";
import Section from "../Sections/Section";
import Slide from "../Slide/Slide";
import Card from "../CardAcceuil/Card";
import AcceuilRecipes from "../Recipes/AcceuilRecipes";

function Home() {
  return (
    <>
      <Slide />
      <Section {...ServiceObjOne} />
      <Section bgWhite {...ServiceObjThree} />
      <Section {...ServiceObjTwo} />
      <Card />
      <AcceuilRecipes />
    </>
  );
}

export default Home;
