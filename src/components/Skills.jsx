import React from "react";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiDjango } from "react-icons/si";
import "../index.css"; // Make sure this file exists

const skills = [
  { name: "HTML", icon: <FaHtml5 className="icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="icon" /> },
  { name: "JavaScript", icon: <FaJs className="icon" /> },
  { name: "React", icon: <FaReact className="icon" /> },
  { name: "Python", icon: <FaPython className="icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="icon" /> },
  { name: "Express.js", icon: <SiExpress className="icon" /> },
  { name: "Django", icon: <SiDjango className="icon" /> },

  { name: "Git", icon: <FaGitAlt className="icon" /> },
  { name: "SQL", icon: <FaDatabase className="icon" /> },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
