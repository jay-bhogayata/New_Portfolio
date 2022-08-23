import React from "react";
import html from "../images/html5.svg";
import css from "../images/css3.svg";
import js from "../images/javascript.svg";
import react from "../images/reactjs.svg";
import git from "../images/git.svg";
import docker from "../images/docker.svg";
import tailwind from "../images/tailwind.svg";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-[#1b1b1b] p-2 flex justify-between mt-10 flex-wrap"
    >
      <img src={html} alt="html-img" />
      <img src={css} alt="css-img" />
      <img src={js} alt="js-img" />
      <img src={react} alt="reactjs-img" />
      <img src={tailwind} alt="tailwind-img" />
      <img src={docker} alt="docker-img" />
      <img src={git} alt="git-img" />
    </div>
  );
};

export default Skills;
