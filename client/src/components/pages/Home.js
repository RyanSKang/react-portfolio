import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    const text= Typewriter({
        words: [' Eat', "Sleep", "Code", "Repeat"],
        typeSpeed: 50,
        deleteSpeed: 50,
        loop: {},
        cursor: true, 
        delaySpeed: 600
      });

return(
    <>
        <div className="display-flex flex-col justify-center text-center my-48" id="home">
            <h1 className="text-4xl mb-14">Ryan Kang | Junior Full Stack Developer</h1>
        <div className="display-flex flex-col justify-center text-center">
            <h1 className="lg: text-4xl"> 
            All I want to do is {' '}
            <span className="font-bold text-gray-500">
                {text}
            </span>
            </h1>
        </div>
        </div>
        </>
)};

export default Home