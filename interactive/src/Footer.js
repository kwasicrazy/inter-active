import React from 'react'
import logo from './img/love.svg'

const Footer = () => {
  return (
    <div className='footer'>
        {/* <hr/> */}
       <div className='foot-img'> 
        <img src={logo} alt='logo' height='40px' width='50px'/>
        </div>
    </div>
  )
}

export default Footer