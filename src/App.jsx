import React, { useRef } from 'react'
import { BrowserRouter } from "react-router-dom";

import { About, Blog, Experience, Footer, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  const parallax = useRef(null);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-purple0'>
        <Navbar />
        <Hero />
        <About />
        <div className='bg-purple1'>
          <Experience />
        </div>
        <Works />
        {/* <Tech /> */}
        <div className='bg-purple1'>
          <Blog />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
