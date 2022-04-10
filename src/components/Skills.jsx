import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Sass from '../assets/sass.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Gsap from '../assets/gsap.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen skill text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-teal-600 '>Skills</p>
              <p className='py-4'>Your design portfolio content should showcase your best work. Include an interactive prototype, a micro animation, a website in motion, not just static designs.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Gsap} alt="GSAP icon" />
                  <p className='my-4'>GSAP</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Sass} alt="SASS icon" />
                  <p className='my-4'>SASS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
