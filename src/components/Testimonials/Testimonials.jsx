import React, { useState } from 'react'

import './Testimonials.css'

import {testimonialsData} from '../../data/testimonialsData'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'


const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const length = testimonialsData.length;

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{ color: 'var(--orange)'}}>
            {testimonialsData[selected].name}
          </span> {" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="testimonials" />

        <div className="arrows">
          <img 
            onClick={() => (
              selected === 0 
                ? setSelected(length - 1) 
                : setSelected((prev) => prev-1)
            )}
            src={leftArrow} 
            alt="left arrow" />
          <img 
            onClick={() => (
              selected === length - 1 
                ? setSelected(0) 
                : setSelected((prev) => prev+1)
            )}
            src={rightArrow} 
            alt="right arrow" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials