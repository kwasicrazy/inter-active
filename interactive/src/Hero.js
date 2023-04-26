import React from 'react'
import { Link } from 'react-router-dom';
import ImageGallery from './HeroImage'



const Hero = () => {
  
  
  return (
    <div className='hero'>
        <div className='text'>
            <h2>ACCELERATE APP DEVELOPMENT</h2>
            <h4>Quickly and easily generate diverse and realistic synthetic data and high-fidelity 3D worlds to enhance model performance.</h4>
            <Link to='/demo'><button className='request-btn'>REQUEST A DEMO</button></Link>
            
        </div>
        <div className='img'>
        <ImageGallery/>
        </div>
    </div>
  )
}

export default Hero