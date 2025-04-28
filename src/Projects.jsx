import React from "react";
import "./index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Optional if needed
import news from "./assets/images/news_website.png";
import portfolio from "./assets/images/portfolio_website.png";
import foss from "./assets/images/foss.png";
import Project from "./components/project.jsx"; // Use this import to render the `Project` component

const projectList = [
  {
    title: "News Website",
    description: "Stay updated with the latest news. this is just an simple website which uses API to fetch the news",
    github: "https://github.com/MeenakshiAM/KTN-Know-The-News...-",
    live: "#",
    image: news,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work. This website is made using React.js .",
    github: "https://github.com/MeenakshiAM/My-Portfolio",
    live: "https://meenakshiam.github.io/My-Portfolio/",
    image: portfolio,
  },
  {
    title: "Foss club LBSITW",
    description: "This is foss club lbsitw's official website made in collaboration with foss club tech & hackathon team of lbsitw.",
    github: "https://github.com/FOSSCLUB-LBSITW/FOSS-WEBSITE",
    live: "https://fossclub-lbsitw.github.io/FOSS-WEBSITE/",
    image: foss,
  },
  
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <Project key={index} {...project} /> 
        ))}
      </div>
    </section>
  );
}
