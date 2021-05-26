import React from "react";
import "../../App.css";
import { ServiceObjOne, ServiceObjTwo, ServiceObjThree } from "./data";
import Section from "../Sections/Section";
import Slide from "../Slide/Slide";
import Card from "../CardAcceuil/Card";

function Home() {
  return (
    <>
      <Slide />
      <Section {...ServiceObjOne} />
      <Section {...ServiceObjThree} />
      <Section {...ServiceObjTwo} />
      <Card />
    </>
  );
}

export default Home;
