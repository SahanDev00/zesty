import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import DarkMode from './DarkMode';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
  };

  return (
    <div>
      <div className={`fixed bg-gradient-to-b from-blue-900  dark:from-black dark:to-black/10 z-30 w-full h-[70px] pt-8 opacity-90 bg-opacity-95 transition-all duration-300 ${isMenuOpen ? 'top-[160px] bg-blue-900 dark:bg-black/90' : 'top-0'}`}>
        <div className='h-full w-[90%] md:w-[80%] bg-transparent px-5 mx-auto flex justify-between items-center'>
          <ScrollLink
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='text-2xl md:text-3xl font-bold text-white cursor-pointer' onSetActive={() => handleSetActive('home')}
            >
              ZESTY
          </ScrollLink>
          <ul className='hidden md:flex gap-20 font-semibold text-sm'>
            <ScrollLink
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer hover:text-white ${activeSection === 'home' ? 'dark:text-white text-white scale-105' : 'text-blue-200 dark:text-gray-400'}`}
              onSetActive={() => handleSetActive('home')}
            >
              HOME
            </ScrollLink>
            <ScrollLink
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer hover:text-white ${activeSection === 'about' ? 'dark:text-white text-white scale-105' : 'text-blue-200 dark:text-gray-400'}`}
              onSetActive={() => handleSetActive('about')}
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer hover:text-white ${activeSection === 'contact' ? 'dark:text-white text-white scale-105' : 'text-blue-200 dark:text-gray-400'}`}
              onSetActive={() => handleSetActive('contact')}
            >
              CONTACT
            </ScrollLink>
          </ul>
          <div className='text-white hidden md:flex'>
            <DarkMode />
          </div>
          <div className='text-white md:hidden block' onClick={toggleMenu}>
            {!isMenuOpen ? <GiHamburgerMenu size={25} /> : <IoCloseSharp size={25}/>}
          </div>
        </div>
      </div>
      <div className={`fixed w-full z-30 bg-blue-900 dark:bg-black/90 bg-opacity-95 transition-all duration-300 ${isMenuOpen ? 'top-0' : '-top-[160px]'} h-[160px]`}>
        <div className='w-[90%] md:w-[80%] mx-auto flex flex-col items-center pt-6'>
          <ul className='flex flex-col gap-4 font-semibold text-sm'>
            <ScrollLink
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer hover:text-white text-center ${activeSection === 'home' ? 'text-white' : 'text-gray-400'}`}
              onSetActive={() => handleSetActive('home')}
              onClick={() => scrollToSection('home')}
            >
              HOME
            </ScrollLink>
            <ScrollLink
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer hover:text-white text-center ${activeSection === 'about' ? 'text-white' : 'text-gray-400'}`}
              onSetActive={() => handleSetActive('about')}
              onClick={() => scrollToSection('about')}
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer hover:text-white text-center ${activeSection === 'contact' ? 'text-white' : 'text-gray-400'}`}
              onSetActive={() => handleSetActive('contact')}
              onClick={() => scrollToSection('contact')}
            >
              CONTACT
            </ScrollLink>
          </ul>
          <div className='text-white mt-5'>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
