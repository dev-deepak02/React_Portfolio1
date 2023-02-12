import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Expericience from './components/Expericience/Expericience'
import Footer from './components/Footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Expericience/>
      <Services/>
      <Testimonials/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App


// 1.7mm