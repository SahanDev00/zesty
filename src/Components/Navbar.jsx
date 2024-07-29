import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import DarkMode from './DarkMode';

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

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };
  
    return (
      <div>
        <div className={`fixed z-10 w-full h-[70px] mt-5 opacity-80 bg-opacity-95 transition-all duration-300 ${isMenuOpen ? 'top-[160px]' : 'top-0'}`}>
          <div className='h-full w-[90%] md:w-[80%] bg-transparent px-5 mx-auto flex justify-between items-center'>
            <h1 className='text-2xl md:text-3xl font-bold text-white'>ZESTY</h1>
            <ul className='hidden md:flex gap-20 font-semibold text-sm'>
              <Link to='/' exact className={`cursor-pointer hover:text-white ${isActive('/') ? 'text-white' : 'text-gray-400'}`}>HOME</Link>
              <Link to='/about' className={`cursor-pointer hover:text-white ${isActive('/about') ? 'text-white' : 'text-gray-400'}`}>ABOUT</Link>
              <Link to='/contact' className={`cursor-pointer hover:text-white ${isActive('/contact') ? 'text-white' : 'text-gray-400'}`}>CONTACT</Link>
            </ul>
            <div className='text-white hidden md:flex'>
                <DarkMode />
            </div>
  
            {/* Hamburger Menu */}
            <div className='text-white md:hidden block' onClick={toggleMenu}>
              <GiHamburgerMenu size={25} />
            </div>
          </div>
        </div>
  
        {/* Collapsible Section */}
        <div className={`fixed w-full z-10 bg-opacity-95 transition-all duration-300 ${isMenuOpen ? 'top-0' : '-top-[160px]'} h-[160px]`}>
          <div className='w-[90%] md:w-[80%] mx-auto flex flex-col items-center pt-6'>
            <ul className='flex flex-col gap-4 font-semibold text-sm'>
              <Link to='/' exact className={`cursor-pointer hover:text-white text-center ${isActive('/') ? 'text-white' : 'text-gray-400'}`}>HOME</Link>
              <Link to='/about' className={`cursor-pointer hover:text-white text-center ${isActive('/about') ? 'text-white' : 'text-gray-400'}`}>ABOUT</Link>
              <Link to='/contact' className={`cursor-pointer hover:text-white text-center ${isActive('/contact') ? 'text-white' : 'text-gray-400'}`}>CONTACT</Link>
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
  
