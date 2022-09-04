import React from 'react'

const Skills = () => {
    return (
      <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-green-600">
                Skills
              </p>
            </div>
            <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className='sm:text-right text-2xl font-bold'>
                <p>Here are some of the technologies I have worked with:</p>
              </div>
              <div>
                  <p className='sm:text-right text-2xl font-bold'> HTML, CSS, JavaScript, Node.js, React, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
    );
  };
  
  export default Skills;
  