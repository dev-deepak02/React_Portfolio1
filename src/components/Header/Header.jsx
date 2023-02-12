import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/about1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
<header>
  <div className="container header_container">
    <h5>Hello I'm</h5>
    <h1>Deepak Kumar</h1>
    <h5 className='text-align'>MERN Stack Developer</h5>
    <CTA/> 
    <HeaderSocials/>
    <div className="me">
      <img src={ME} alt="me" />
    </div>
<a href="#contact" className='scroll_down'>Scroll Down</a>
  </div>
</header>
  )
}

export default Header