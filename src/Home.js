import React from 'react'
import About from './HomePage/About'
import Contact from './HomePage/Contact'
import Explore from './HomePage/Explore'
import Footer from './HomePage/Footer'
import Landing from './HomePage/Landing'


function Home() {
  return (
      <div>
          <Landing />
          <Explore/>
          <About />
          <Contact />
          <Footer />
    </div>
  )
}

export default Home;