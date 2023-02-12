import React from 'react'
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/deepak-kumar-saw-359490225" target = "_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/CreaterboyDk" target = "_blank"><AiFillGithub/></a>
        <a href="https://facebook.com" target = "_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocials;