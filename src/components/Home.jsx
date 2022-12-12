import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
      <div className="w-full h-screen bg-color3">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full">
          <p className=" text-4xl text-color1">Hi, my name is </p>
          <h1 className=" text-4xl sm:text-7xl font-bold text-color1">Said</h1>
          <h2>I'm a full-stack developer</h2>
          <p>
            I'm a full-stack developer specializing in building digital
            experience.
          </p>
          <button className="w-[120px] group text-color1 border-2 pl-3 py-2 my-2 flex items-center hover:bg-color4 hover:border-color3">
            View Work
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    );
};

export default Home;
