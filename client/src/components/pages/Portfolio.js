import React from 'react';
import bookSearch from '../../assets/bookSearch.jpg';
import codeQuiz from '../../assets/codeQuiz.jpg';
import magicCarpet from '../../assets/magicCarpet.jpg';
import noSQL from '../../assets/noSQLNetwork.jpg';
import pwa from '../../assets/pwaTextEditor.jpg';
import weatherApp from '../../assets/weatherApp.jpg';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'

const Portfolio = () => {

    return (
        <>
            <h1 class="mt-96 underline text-6xl text-center font-extrabold leading-none tracking-tight text-gray-500 md:text-7xl lg:text-9xl dark:text-white">My Projects</h1>
            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All Projects</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">APIs</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">MERN</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">NoSQL</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">PWA</button>
            </div>

            <div class="justify-center grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="grid gap-6 text-center">
                    <div>
                        <h1 class="underline align-text-top mb-0"> Book Search Engine</h1>
                        <img class="h-auto max-w-full rounded-lg" src={bookSearch} alt="bookSearch Engine Project" />
                        <p class="whitespace-normal text-lg mt-1 mb-2">This application is built using the MERN stack</p>
                        <a href="https://github.com/RyanSKang/MERN-Book-Search-Engine" rel='noopener'><BsFillArrowUpRightSquareFill/>Git Hub Repository</a>
                        <a href="https://mern-book-search-engine-ryans-bf5f87e59dcd.herokuapp.com/" rel='noopener'><BsFillArrowUpRightSquareFill/>Deployed Application Link</a>
                    </div>
                    <div>
                        <h1 class="underline align-text-top mb-0"> The Magic Carpet</h1>
                        <img class="h-auto max-w-full rounded-lg" src={magicCarpet} alt="magic carpet project" />
                        <p class="whitespace-normal text-lg mt-1 mb-2">This application is built using the MERN stack</p>
                        <a href="https://github.com/RyanSKang/The-Magic-Carpet" rel='noopener'><BsFillArrowUpRightSquareFill/>Git Hub Repository</a>
                        <a href="https://the-magic-carpet-037d75dd3e3d.herokuapp.com/" rel='noopener'><BsFillArrowUpRightSquareFill/>Deployed Application Link</a>
                    </div>
                    <div>
                        <h1 class="underline align-text-top mb-0"> NoSQL Networking Back End</h1>
                        <img class="h-auto max-w-full rounded-lg" src={noSQL} alt="noSQL BackEnd" />
                        <p class="whitespace-normal text-lg mt-1 mb-2">This application is built using noSQL Database</p>
                        <a href="https://github.com/RyanSKang/NoSQL-API" rel='noopener'><BsFillArrowUpRightSquareFill/>Git Hub Repository</a>
                        <a href="https://watch.screencastify.com/v/XZeZGGOWW8oloJLLxXZI" rel='noopener'><BsFillArrowUpRightSquareFill/>Deployed Application Link</a>
                    </div>
                </div>
                <div class="grid gap-6 text-center">
                    <div>
                        <h1 class="underline align-text-top mb-0"> Weather App</h1>
                        <img class="h-auto max-w-full rounded-lg" src={weatherApp} alt="weatherApp" />
                        <p class="whitespace-normal text-lg mt-1 mb-2">This application is built using API</p>
                        <a href="https://github.com/RyanSKang/Weather-Dashboard" rel='noopener'><BsFillArrowUpRightSquareFill/>Git Hub Repository</a>
                        <a href="https://ryanskang.github.io/Weather-Dashboard/" rel='noopener'><BsFillArrowUpRightSquareFill/>Deployed Application Link</a>
                    </div>
                    <div>
                        <h1 class="underline align-text-top mb-0"> Code Quiz App</h1>
                        <img class="h-auto max-w-full rounded-lg" src={codeQuiz} alt="coding quiz" />
                        <p clas="whitespace-normal text-lg mt-1 mb-2">This application is built using API</p>
                        <a href="https://github.com/RyanSKang/APIs-Code-Challenge" rel='noopener'><BsFillArrowUpRightSquareFill/>Git Hub Repository</a>
                        <a href="https://ryanskang.github.io/APIs-Code-Challenge/" rel='noopener'><BsFillArrowUpRightSquareFill/>Deployed Application Link</a>
                    </div>
                    <div>
                        <h1 class="underline align-text-top mb-0"> PWA Text Editor</h1>
                        <img class="h-auto max-w-full rounded-lg" src={pwa} alt="PWA Text editor" />
                        <p class="whitespace-normal text-lg mt-1 mb-2">This application is built as a Progressive Web Application</p>
                        <a href="https://github.com/RyanSKang/PWA-Text-Editor" rel='noopener'><BsFillArrowUpRightSquareFill/>Git Hub Repository</a>
                        <a href="https://github.com/RyanSKang/PWA-Text-Editor" rel='noopener'><BsFillArrowUpRightSquareFill/>Deployed Application Link</a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Portfolio