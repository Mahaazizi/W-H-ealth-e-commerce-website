import React from 'react';
import '../../App.css';
import { ServiceObjOne, ServiceObjTwo, ServiceObjThree } from './data';
import Footer from '../Footer/Footer';
import Section from '../Sections/Section';
import Card from '../Card/Card'
import Slide from '../Slide/Slide';


function Home() {
  return (
    <>
      <Slide />
      <Card />
      <Section {...ServiceObjOne} />
      <Section {...ServiceObjThree} />
      
      <Section {...ServiceObjTwo} />
      <Footer/>
    </>
  );
}

export default Home;