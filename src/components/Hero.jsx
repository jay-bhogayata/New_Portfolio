import React from "react";
import think from "../images/bg1.png";

const Hero = () => {
  return (
    <div className="bg-[#1b1b1b] flex w-full lg:px-9 px-4 lg:flex-row flex-col space-y-4">
      <div className=" lg:w-5/12 mt-10 mx-auto ">
        <h1 className="space-y-5   mt-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-mono   text-5xl  font-bold ">
          Hi , I'm Jay Fullstack Web Developer.
        </h1>
        <p className="text-gray-100/75 mt-4 tracking-widest text-xl">
          A passionate developer who is Love to make and break stuff everyday.
        </p>
      </div>
    </div>
  );
};

export default Hero;
