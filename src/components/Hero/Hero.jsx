import React from 'react'
import './Hero.css'

import Header from './../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best ad span */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div></div>
          <span className="stroke-text">Shape </span>
          <span>Your</span>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <nav>In here we will help you to shape and build your ideal body and live up your life to fullest</nav>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right side */}
      <div className="right-h">
        <button className="btn">Join Now</button>
      
        <div className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>  
        </div>

        <img src={hero_image} alt="hero" className="hero-image"/>
        <img src={hero_image_back} alt="hero back" className="hero-image-back"/>

        <div className="calories">
          <img src={Calories} alt="Calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Hero