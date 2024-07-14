import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const skills = [
  { name: "HTML", icon: "./svg/html.svg" },
  { name: "CSS", icon: "./svg/css.svg" },
  { name: "Javascript", icon: "./svg/javascript.svg" },
  { name: "React", icon: "./svg/react.svg" },
  { name: "Tailwind", icon: "./svg/tailwind.svg" },
  { name: "MongoDB", icon: "./svg/mongoDB.svg" },
  { name: "Git", icon: "./svg/git.svg" },
  { name: "GitHub", icon: "./svg/github-mark-white.svg" },
  { name: "Node.js", icon: "./svg/nodejs-2.svg" },
  {
    name: "SQL",
    icon: "./svg/sql-database-generic-svgrepo-com.svg",
  },
  { name: "Figma", icon: "./svg/figma.svg" },
];

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="bg-[#EEEDEB] w-9/12 p-8 text-center rounded-lg"
    >
      <h2 className="text-4xl  mb-8">Skills</h2>
      <div className="flex flex-wrap justify-around">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 m-4 w-36 flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={skill.icon}
              //   src="./svg/adobe-xd.svg"
              alt={`${skill.name} icon`}
              className="w-12 h-12"
            />
            <p className="text-white mt-4 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
