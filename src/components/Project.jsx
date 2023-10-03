import React from "react";
import p1 from "../images/p1.webp";
import p2 from "../images/p2.webp";
import p3 from "../images/p3.webp";
import p4 from "../images/p4.webp";
import p5 from "../images/p5.webp";
import p6 from "../images/p6.webp";

const Project = () => {
  const projects = [
    {
      id: 1,
      nameofProject: "Tic-Tac-Toe",
      discription: "Tic-Tac-Toe game using react js and some react js library.",
      img: p1,
      githublink: "https://github.com/jay-bhogayata/react-02-tic-tac-toe",
      livelink: "https://react-02-tic-tac-toe.vercel.app/",
    },
    {
      id: 2,
      nameofProject: "Weather app",
      discription:
        "This site  Shows you the current weather using weather api.",
      img: p2,
      githublink: "https://github.com/jay-bhogayata/weatherapp",
      livelink: "https://weatherapp-delta-five.vercel.app/",
    },
    {
      id: 3,
      nameofProject: "CodeXacdamy",
      discription: "Use firebase with react js for user authentication.",
      img: p3,
      githublink: "https://github.com/jay-bhogayata/codeXacdamy",
      livelink: "https://code-xacdamyy.vercel.app/",
    },
    {
      id: 4,
      nameofProject: "To-Do list app",
      discription:
        "This is a basic to do list app using react js local storage and tailwind css.",
      img: p4,
      githublink: "https://github.com/jay-bhogayata/TODO-APP",
      livelink: "https://todo-app-alpha-woad.vercel.app/",
    },
    {
      id: 5,
      nameofProject: "JS calculator",
      discription: "basic calculator app using html, css and javascript.",
      img: p5,
      githublink:
        "https://github.com/jay-bhogayata/javacript_learnning/tree/main/Basic_project/04_js%20calculator",
      livelink: "https://famous-granita-9b435d.netlify.app/",
    },
    {
      id: 6,
      nameofProject: "JS clock",
      discription: "Digital clock using html, tailwind css and javascript.",
      img: p6,
      githublink:
        "https://github.com/jay-bhogayata/javacript_learnning/tree/main/Basic_project/05_JS%20and%20CSS%20%20analog%20Clock",
      livelink: "https://javacriptclock.vercel.app/",
    },
  ];

  return (
    <div className="bg-[#1b1b1b] flex  flex-wrap px-4" id="project">
      {projects.map((p) => (
        <div className="lg:w-1/3 mt-10 flex mx-auto flex-col  text-gray-400 lg:p-10 ">
          <a href={p.livelink} target="_blank">
            <img src={p.img} alt="" className=" mx-auto rounded-xl border-2" />
          </a>
          <h1 className="mt-5 mx-auto text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            {p.nameofProject}
          </h1>
          <p className="mt-4 mx-auto text-xl text-justify">{p.discription}</p>
          <div className="flex justify-between mt-3">
            <a
              href={p.livelink}
              target="_blank"
              className="text-purple-500 text-lg font-semibold"
            >
              Live link
            </a>
            <a
              href={p.githublink}
              target="_blank"
              className="text-purple-500 text-lg font-semibold"
            >
              Github repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
