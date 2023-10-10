import React from 'react'
import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
     <div className='mask'> 
      <img className='into-img' src={IntroImg}  alt='Introimg'/>
     </div>
     <div className='content'>
        <p>Hi, I'M  A FREELANCER.</p>
        <h1>React Developer</h1>
        <div>
        <Link to="/project" className='btn'>Projects</Link>
        <Link to="/contact" className='btn '>contact</Link>
     </div>
    </div>
     </div>
    
  )
}

export default HeroImg