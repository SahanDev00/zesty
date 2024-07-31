import React from 'react';
import Hero from '../Components/Hero';
import Pricing from '../Components/Pricing';
import Contact from '../Components/Contact';
import ParticlesDemo from '../Components/ParticlesComponent';
import { FooterComponent } from '../Components/FooterComponent';
import AccordianComponent from '../Components/AccordianComponent';
import About from '../Components/About';

const Home = () => {
  return (
    <div id='home' className='relative bg-black overflow-hidden'>
      {/* Particles demo should be under all components */}
      <div className="absolute inset-0 z-0">
        <ParticlesDemo />
      </div>
      
      {/* Other components */}
      <div className="relative z-10">
        <Hero />
        <About/>
        <Pricing />
        <Contact />
        <AccordianComponent/>
        <FooterComponent/>
      </div>
    </div>
  );
}

export default Home;
