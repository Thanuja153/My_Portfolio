import React from "react";
import HeroImage from "../assets/Thanuja.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:mr-20">
          <h2 className=" text-4xl sm:text-7xl font-bold flex items-center text-white">
            <span> Hi! Thanuja Here </span>
            <img
              src="https://raw.githubusercontent.com/arasgungore/arasgungore/main/gifs/waving_hand.gif"
              alt="welcome"
              width="60"
              height="60"
            />
          </h2>

          <p className="text-gray-500 py-4 max-w-md text-white">
            <span> A Passionate Full stack developer.</span>
            <br />
            Wanna Know more about me Click the link below
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              KnowMore
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
