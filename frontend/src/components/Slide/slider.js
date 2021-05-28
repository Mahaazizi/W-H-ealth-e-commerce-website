import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';
function Slide(props) {
    const { recipes } = props;
    const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  };

 

  return (

    <div className="slider">

      <div className="slider-wrapper">
        <h1 className="Slide">Yummy Food just For You !</h1>
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

          {recipes.map((slide) =>

            <div className="slick-slide" key={slide.recipe.id}>
              
              <img className="slick-slide-image" src={slide.recipe.image} />
              <label className="slick-slide-label">{slide.recipe.label}</label>
            </div>

          )}

        </Slider>
        
        <div className="thumbnail-slider-wrap">
 
        </div>
      </div>

    </div>
  );
}

export default Slide;
  
  