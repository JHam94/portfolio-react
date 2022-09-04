import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm John. Please take a look at my work.</p>
            </div>
            <div>
                <p className="text-xl" >I am recent graduate from The University of Richmond's Full-Stack Coding Bootcamp. My background is in Exercise Science and Occupational Therapy and I am looking to utilize my creativity, adaptability, and strong interpersonal skills to continue to pursue my career in the web development field.</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
