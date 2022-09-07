import React from "react";
import react from "../images/reactjs.svg";

const Hero = () => {
  return (
    <div className="bg-[#1b1b1b] flex w-full lg:px-9 px-4 lg:flex-row flex-col space-y-4">
      <div className=" lg:w-3/4 flex  lg:flex-row flex-col  bg-purple  mt-24 mx-auto ">
        <div className="lg:w-2/5 mx-auto">
          <h1 className="space-y-5    text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-mono   text-5xl  font-bold ">
            Hi , I'm Jay Frontend Web Developer.
          </h1>
          <p className="text-gray-100/75 mt-4 tracking-widest text-xl">
            A passionate developer who is Love to make and break stuff everyday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
