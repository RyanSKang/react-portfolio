import React from "react";
import { Typewriter } from 'react-simple-typewriter'
// import bgVideo from '../../assets/bgVideo.mp4'

const Home = () => {
    const text= Typewriter({
        words: ["I'm Ryan Kang.", "I'm a troubleshooter.", "I'm an Entry Level Developer.", "I'm open to work!"],
        typeSpeed: 80,
        deleteSpeed: 50,
        loop: {},
        cursor: true, 
        delaySpeed: 800
      });

return(
    <>
        <div className="home display-flex flex-col justify-center text-center text-gray-400 object-top mt-28 py-12" id="home">
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl mb-11">Welcome</h2>
         <div className="display-flex flex-col justify-center text-center mb-11">
            <h1 className="lg:text-8xl md: text-6xl sm: 4xl"> 
            <span className="font-bold text-gray-500">
                {text}
            </span>
            </h1>
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl mt-11">Based in Aurora, Colorado</h2>
         </div>
        </div>
        </>
)};

export default Home