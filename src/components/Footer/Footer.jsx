import React from 'react'

import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="Github" />
          <img src={Instagram} alt="Instagram" />
          <img src={Linkedin} alt="Linkedin" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer