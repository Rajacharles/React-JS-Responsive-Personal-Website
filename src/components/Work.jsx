import React from 'react';
import work1 from '../assets/work-1.jpg';
import work2 from '../assets/work-2.jpg';
import work3 from '../assets/work-3.jpg';
import work4 from '../assets/work-4.jpg';
import work5 from '../assets/work-5.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 work'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-teal-600'>
            Work
          </p>
          <p className='py-6'>Please Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 text-center group-hover:opacity-100'>
              <span className='font-bold text-white tracking-wider uppercase'>
                UX Inspiration
              </span>
              <div className='pt-6 text-center'>
                <a href='/'>
                  <button className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold'>
                    Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 text-center group-hover:opacity-100'>
              <span className='font-bold text-white tracking-wider uppercase'>
                UI Interaction
              </span>
              <div className='pt-6 text-center'>
                <a href='/'>
                  <button className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${work3})` }}
            className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 text-center group-hover:opacity-100'>
              <span className='font-bold text-white tracking-wider uppercase'>
                UI Persona
              </span>
              <div className='pt-6 text-center'>
                <a href='/'>
                  <button className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold'>
                    Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work4})` }}
            className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 text-center group-hover:opacity-100'>
              <span className='font-bold text-white tracking-wider uppercase'>
                UI Research
              </span>
              <div className='pt-6 text-center'>
                <a href='/'>
                  <button className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold'>
                  Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${work5})` }}
            className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 text-center group-hover:opacity-100'>
              <span className='font-bold text-white tracking-wider uppercase'>
                User Centered
              </span>
              <div className='pt-6 text-center'>
                <a href='/'>
                  <button className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold'>
                  Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className='shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 text-center group-hover:opacity-100'>
              <span className='font-bold text-white tracking-wider uppercase'>
                UxD
              </span>
              <div className='pt-6 text-center'>
                <a href='/'>
                  <button className='text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2 bg-white text-gray-700 font-bold'>
                    Wireframes
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
