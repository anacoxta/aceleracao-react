import React from 'react';
import './style.scss';
import HeroPic1 from '../../assets/hero-pic1.jpg';
import HeroPic2 from '../../assets/hero-pic2.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__text-container'>
        <h3 className='hero__seasons'>
          Outono
          <br />
          &nbsp;&nbsp;Inverno
        </h3>
        <h4 className='hero__year'>2020</h4>
      </div>
      <div className='hero__picture-container'>
        <img className='hero__picture' src={HeroPic1} alt='' />
        <img className='hero__picture' src={HeroPic2} alt='' />
      </div>
    </div>
  );
};

export default Hero;
