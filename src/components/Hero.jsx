import React from "react";
import think from "../images/bg1.png";

const Hero = () => {
  return (
    <div className="bg-[#1b1b1b] font-worksans w-full lg:px-40 px-4 flex ">
      <div className="lg:w-1/2 w-full mt-20 mx-auto">
        <h1 className="lg:py-10 lg:px-4 py-0 px-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-mono   text-5xl  font-bold ">
          Hi , I'm Jay Fullstack Web Developer.
        </h1>
      </div>
      <div className="w-1/2 mt-20 flex invisible lg:visible">
        <img src={think} alt="" className="w-2/3 mx-auto"/>
      </div>
    </div>
  );
};

export default Hero;
