import React from "react";
import "./index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Optional if needed
import news from "./assets/images/news_website.png";
import portfolio from "./assets/images/portfolio_website.png";
import QR from "./assets/images/QR_website.png";
import Project from "./components/project.jsx"; // Use this import to render the `Project` component

const projectList = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work.",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
    image: portfolio,
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes easily with this app.",
    github: "https://github.com/yourusername/qrcode-app",
    live: "https://qrcodeapp.com",
    image: QR,
  },
  {
    title: "News Website",
    description: "Stay updated with the latest news.",
    github: "https://github.com/yourusername/news-app",
    live: "https://newswebsite.com",
    image: news,
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
