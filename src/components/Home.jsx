import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen banner bg-[#08111e]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ececec]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ececec]'>
          Chris Lana
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ececec]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#ececec] py-4 max-w-[700px]'>
        A full stack web developer is a person who can develop both client and server software. 
        In addition to mastering HTML and CSS Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='bg-teal-600 rounded-full text-white transition-all group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-600 hover:border-teal-600'>
            View Work
            <span className='duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
