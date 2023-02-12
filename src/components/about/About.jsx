import React from 'react'
import './About.css'
import ME from '../../assets/pic1.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
          
            <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
            </article>
          
            <article className='about_card'>
            <FiUser className='about_icon'/>
            <h5>Clients</h5>
            <small>50+ Worldwide</small>
            </article>
          
            <article className='about_card'>
            <VscFolderActive className='about_icon'/>
            <h5>Project</h5>
            <small>10+ Completed</small>
            </article>
          </div>
          <p>Problem solver and fast learner with good communication skills. I am motivated to upgrade and expand my skill set through mentorship and challenging projects. I enjoy working collaboratively but can also run with projects independently.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
