import React from "react";
import django from "../images/djangocerti.webp";
import htmlandcss from "../images/htmlcsscerti.webp";
import cloud from "../images/cloudcerti.webp";
const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "html and css for morden web Developement",
      img: htmlandcss,
    },
    {
      id: 2,
      name: "django Fullstack Developer",
      img: django,
    },
    {
      id: 3,
      name: "introduction to cloud computing",
      img: cloud,
    },
  ];

  return (
    <div
      id="certificates"
      className="bg-[#1b1b1b] flex  flex-wrap px-4 mt-6   "
    >
      {certificates.map((c) => (
        <div className="lg:w-1/3 mt-10 flex mx-auto flex-col  text-gray-400 lg:p-10 ">
          <img src={c.img} alt="" className=" mx-auto rounded-xl border-2" />

          <h1 className="mt-5 mx-auto text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            {c.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
