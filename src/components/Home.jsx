import profileImg from "../assets/images/profile.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "HELLO My dear lovely visitor",
        "I am MEENAKSHI A M",
        "I'm a Web Developer",
        "I am currently working on my skills",
        "Let's Create Something Amazing!",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="home">
        <div className="home-content">
          <h1>Welcome!!!</h1>
          <p>
            <span ref={typedElement}></span>
          </p>

          <div className="social-icons">
            <a
              href="https://github.com/MeenakshiAM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/meenakshi-a-m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/me__ka_4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <img src={profileImg} alt="profile" className="profile" />
      </div>
    </section>
  );
}
