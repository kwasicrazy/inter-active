import React from 'react'
import logo from './img/coding.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
    
        <h3 className='brandName'><img src={logo} alt='logo' height='30px' width='30px'/>smartDev</h3>
        <div className='about'>
            <Link to='/'>Home</Link>
            <Link to="/demo"> Demo</Link>
        </div>
        <button className='contact'>CONTACT US</button>
        
    </div>
  )
}

export default Nav