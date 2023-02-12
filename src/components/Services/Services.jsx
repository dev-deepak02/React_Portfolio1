import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services_container">
      <article className="service">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Ecommerce app design</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Social-media app design</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Email marketing template </p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Web home page design</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Web pages design</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Desired design</p>
        </li>
        </ul>
      </article>
      {/* ----- End of ui/ux -------- */}

      <article className="service">
        <div className="service_head">
          <h3>Web Development</h3>
        </div>
        <ul className="service_list">
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Traveling website</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Restaurant website</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Ecommerce website </p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Plumbing website</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Portfolio website</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>News application website</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Desired Application</p>
        </li>
        </ul>
      </article>
 {/* ----- End of Web Development -------- */}

      <article className="service">
        <div className="service_head">
          <h3>IOT Work</h3>
        </div>
        <ul className="service_list">
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Automatic Room light Controller</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Personal Voice Assistance</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Home Automation</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Digital Notice Board</p>
        </li>
        <li>
          <BiCheck className='service_list-icon'/>
          <p>Object Detector</p>
        </li>
        
        </ul>
      </article>
       {/* ----- End of Content Creation -------- */}
    </div>  
    </section>
  )
}

export default Services
