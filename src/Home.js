import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Explore from './Components/Explore'
import Footer from './Components/Footer'
import Landing from './Components/Landing'

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

export default Home