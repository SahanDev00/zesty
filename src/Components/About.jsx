import React from 'react'
import Features from './Features'
import Pricing from './Pricing'

const About = () => {
  return (
    <div id='about' className='w-[90%] mx-auto mt-32'>
        <h1 className='mt-10 bg-gradient-to-b uppercase from-gray-200 to-gray-400 bg-clip-text text-center text-5xl sm:text-6xl font-semibold leading-snug text-transparent dark:from-white dark:to-slate-500/40'>About Us</h1>
        <p className="pointer-events-none w-[95%] sm:w-[85%] md:w-[80%] lg:w-[75%] mt-7 mx-auto whitespace-pre-wrap bg-gradient-to-b from-gray-200 to-gray-400/90 bg-clip-text text-center text-[16px] md:text-lg lg:text-xl font-semibold leading-relaxed md:leading-loose text-transparent dark:from-white dark:to-slate-600/50">
            At Zesty AI Solutions, we are at the forefront of technological innovation, dedicated to transforming the future with advanced artificial intelligence solutions. Our team of expert engineers and visionary thinkers is committed to developing cutting-edge AI applications that drive efficiency, enhance decision-making, and unlock new opportunities for businesses across various industries. From intelligent automation to predictive analytics, we harness the power of AI to help our clients stay ahead in a rapidly evolving digital landscape. Join us on our journey to revolutionize the way the world leverages technology.
        </p>
        <Features />
        <Pricing/>
    </div>
  )
}

export default About