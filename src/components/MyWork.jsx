import React from 'react'
import SauceImg from '../assets/Sauce.png'
import SportImg from '../assets/Sport.png'
import SmoothieImg from '../assets/Smoothie.png'
import ReadmeImg from '../assets/readme.png'

const MyWork = () => {
  return (
    <div name='MyWork' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-700'>My Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${SauceImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
<div className='text-center'>Sauce-Boss:</div>                            
<div className='text-center'>MERN SPA</div>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://sauceboss.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/bethanyjean/sauce-boss">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${SportImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
<div className='text-center'>Sports-Seekers:</div>                            
Full-Stack Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://serene-beyond-42809.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/bethanyjean/sports-seekers.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${SmoothieImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
<div className='text-center'>Camp Smoothie:</div>                          
Front-End Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://bethanyjean.github.io/camp-smoothie/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/bethanyjean/camp-smoothie">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${ReadmeImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
<div className='text-center'>readme-generator:</div>                            
Node.js Application
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/JHam94/readme-generator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default MyWork