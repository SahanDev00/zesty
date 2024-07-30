import React from 'react';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import Pricing from '../Components/Pricing';
import Contact from '../Components/Contact';
import ParticlesDemo from '../Components/ParticlesComponent';

const Home = () => {
  return (
    <div className='relative bg-black overflow-hidden'>
      {/* Particles demo should be under all components */}
      <div className="absolute inset-0 z-0">
        <ParticlesDemo />
      </div>
      
      {/* Other components */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
