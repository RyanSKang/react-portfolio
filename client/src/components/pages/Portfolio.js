import React, { useEffect, useRef, useState } from "react";

import { items } from './Items'



const Portfolio = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    let filters = ["API", "MERN", "NoSQL", "PWA"]

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters)
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    }

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = items.filter((item) => item.category === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...items]);
        }
    };
    return (
        <>
            <section id="portfolio" className="bg-black">
                <div className="container ml-48">
                    {/* Heading */}
                    <div className="position-relative flex align-middle text-center justify-center mb-5">
                        <h2
                            className="text-8xl text-uppercase fw-600 w-100"  >
                            Portfolio
                        </h2>
                        <p className="absolute text-center mt-8 font-extrabold text-white text-4xl fw-600 position-absolute w-100 align-self-center lh-base mb-0">
                            {" "}
                            My Work
                            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
                        </p>
                    </div>
                </div>
            </section>

            <div class="flex align-middle items-center justify-center py-4 md:py-8 flex-wrap">
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(category)}
                        className={`button ${selectedFilters?.includes(category) ? "active" : ""}` + "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"}
                        key={`filters-${idx}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div class="grid grid-cols-4 md:grid-cols-3 gap-4">
                {filteredItems.map((item, idx) => (
                    <div key={`items-${idx}`} className="item">
                        <p>{item.name}</p>
                        <img src={item.img}></img>
                    </div>
                ))}
            </div>
        </>
    )
};



export default Portfolio