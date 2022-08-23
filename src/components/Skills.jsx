import React from "react";
import html from "../images/html5.svg";
import css from "../images/css3.svg";
import js from "../images/javascript.svg";
import react from "../images/reactjs.svg";
import git from "../images/git.svg";
import docker from "../images/docker.svg";
import tailwind from "../images/tailwind.svg";

const Skills = () => {
  const list = [
    {
      id: 1,
      img: html,
    },
    {
      id: 2,
      img: css,
    },
    {
      id: 3,
      img: js,
    },
    {
      id: 4,
      img: tailwind,
    },
    {
      id: 5,
      img: react,
    },
    {
      id: 6,
      img: git,
    },
    {
      id: 7,
      img: docker,
    },
  ];

  return (
    <div
      id="skills"
      className="bg-[#1b1b1b] p-2 flex justify-between mt-10 flex-wrap"
    >
      {list.map((l) => (
        <img src={l.img} alt="skills-img" />
      ))}
    </div>
  );
};

export default Skills;
