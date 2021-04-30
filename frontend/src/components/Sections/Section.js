import React from 'react';
import './Section.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Section({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  url
}) {
  return (
    <>
      <div id='services'
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to={url}>
                <Button variant="outline-success" href={url}>{buttonLabel}</Button>{' '}
                </Link>
              </div>
            </div>
           
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' 
                width= '500px' height='350px'/>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;