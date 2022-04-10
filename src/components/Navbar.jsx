import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08111e] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='uppercase text-sm font-semibold'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='uppercase text-sm font-semibold'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='uppercase text-sm font-semibold'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='uppercase text-sm font-semibold'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='uppercase text-sm font-semibold'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full transition-opacity h-screen bg-[#08111e] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-1xl uppercase font-semibold'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-1xl uppercase font-semibold'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-1xl uppercase font-semibold'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-1xl uppercase font-semibold'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-1xl uppercase font-semibold'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between rounded-full rounded-l-none items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between rounded-full mt-2 rounded-l-none items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between rounded-full mt-2 rounded-l-none items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between rounded-full mt-2 rounded-l-none items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
