import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl text-gray-500'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-100'>John Hamborsky</h1>
            <h2 className='text-4lx sm:text-7xl font-bold text-gray-500'>I'm a software developer.</h2>
            <p className='text-gray-500 py-4 max-w-[700px] text-xl'>I am a graduate of The University of Richmond's Full-Stack Coding Bootcamp. I am particularly interested in front-end development.</p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-green-700 hover:border-green-700'><Link to="MyWork" smooth={true} duration={500}>View My Work</Link>< HiArrowNarrowRight className='ml-2'/></button> 
            </div>
        </div>

    </div>
  )
}

export default Home