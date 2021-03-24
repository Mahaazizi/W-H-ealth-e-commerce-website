import React from 'react';

import { Button } from '../Button/Button';
import './Slide.css';

function Slide() {
  return (
    
    <div className='hero-container'>
   
      <video src='/videos/hw.mp4' autoPlay loop muted />
      
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Shop NOW 
        </Button>
        
      </div>
    </div>
  );
}

export default Slide;