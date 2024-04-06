import React, { useRef } from 'react'
import { BrowserRouter } from "react-router-dom";
import './App.css';


import { About, Blog, Experience, Footer, Hero, Navbar, Tech, Works } from "./components";
import bg3 from './assets/workBackground/bg3.png';

const App = () => {
  const parallax = useRef(null);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-purple0'>
        <Navbar />
        <Hero />
        <About />
        {/* when you add a new experience, move all background circles down */}
        <div className='bg-purple1 relative overflow-hidden'> 
          <img className='absolute z-0 right-0 md:-mr-80 -mr-96 object-cover' style={{ height: '750px', marginTop: '250px' }} src={bg3} />
          <img className='absolute z-0 left-0 md:-ml-40 -ml-72 object-cover' style={{ height: '600px', marginTop: '850px' }} src={bg3} />
          <img className='absolute z-0 right-0 md:-mr-24 -mr-56 object-cover' style={{ height: '600px', marginTop: '1300px' }} src={bg3} />
          <Experience />
        </div>
        <Works />
        <div className='bg-purple1'>
          <Blog />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
