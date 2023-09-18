import React from "react";

import Omnifood from "../assets/portfolio/Omnifood.png";
import MyShop from "../assets/portfolio/My_Shop.png";
import flixx from "../assets/portfolio/flixx.png";
import CRUD from "../assets/portfolio/CRUD.png";
import tracalorie from "../assets/portfolio/tracalorie.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: MyShop,
      href: "https://my-shop-ir2k.onrender.com",
      href1: "https://github.com/Thanuja153/My_Shop",
    },
    {
      id: 2,
      src: flixx,
      href: "https://flixx-moviestreamingapp.netlify.app/",
      href1: "https://github.com/Thanuja153/Flixx-app",
    },
    {
      id: 3,
      src: tracalorie,
      href: "https://tracalorieapp1.netlify.app/",
      href1: "https://github.com/Thanuja153/Tracalorie",
    },
    {
      id: 4,
      src: CRUD,
      href: "https://www.linkedin.com/feed/",
      href1: "https://github.com/Thanuja153/Angular-CRUD-APP",
    },
    {
      id: 5,
      src: Omnifood,
      href: "https://omnifood-thanuja.netlify.app/",
      href1: "https://github.com/Thanuja153/Omnifood",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md: h-fit pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          {/* <p className="py-6">Check out my work right here</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href1, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-10 py-3 m-2 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={href1} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-10 py-3 m-2 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
