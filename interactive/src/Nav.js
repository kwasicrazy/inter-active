import React from 'react'
import logo from './img/coding.svg'

const Nav = () => {
  return (
    <div className='nav'>
    
        <h1><img src={logo} alt='logo' height='50px' width='50px'/>smartDev</h1>
        <div className='about'>
            <a href='#'>Careers</a>
            <a href='#'>About us</a>
            <a href='#'>Blog</a>
        </div>
        <button className='contact'>CONTACT US</button>
        
    </div>
  )
}

export default Nav