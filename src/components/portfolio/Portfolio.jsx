import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/goodwill.png'
import IMG2 from '../../assets/Restaurant.png'
import IMG3 from '../../assets/3p.jpg'
import IMG4 from '../../assets/portfolio2.png'
import IMG5 from '../../assets/News.png'
import IMG6 from '../../assets/myntra1.png'

const data = [
  {
  id:1,
  image: IMG1,
  title:'Plumbing Website',
  github:'https://github.com/CreaterboyDk/goodwill',
  demo:'https://goodwillplumbingservices.com/'
},
  {
  id:2,
  image: IMG2,
  title:'Restaurant Website',
  github:'https://github.com',
  demo:'https://github.com'
},
  {
  id:3,
  image: IMG3,
  title:'E-commerce Application',
  github:'https://github.com',
  demo:'https://github.com'
},
  {
  id:4,
  image: IMG4,
  title:'Portfolio Website',
  github:'https://github.com/CreaterboyDk/React-portfolio',
  demo:'https://github.com'
},
  {
  id:5,
  image: IMG5,
  title:'News Application',
  github:'https://github.com/CreaterboyDk/news-application',
  demo:'https://github.com'
},
  {
  id:6,
  image: IMG6,
  title:'Myntra Clone Website',
  github:'https://github.com',
  demo:'https://myntra.com'
},
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

      {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target="_blank">Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio

// 2.4mm