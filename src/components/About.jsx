import profileImg from "../assets/images/profile.jpg";
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hey! I’m <strong>Meenakshi A M</strong>, a web dev who enjoys
            building sleek, responsive websites with clean UI and smooth
            functionality.
          </p>
          <p>
            Right now, I’m focused on leveling up my skills in{" "}
            <strong>React</strong>,<strong> MongoDB</strong>, and exploring cool
            tools like <strong>Framer Motion</strong>.
          </p>
          <p>
            I’m always curious, always learning — and I love turning ideas into
            functional, good-looking apps.
          </p>
        </div>

        <div className="about-image">
          <img src={profileImg} alt="Meenakshi AM" />
        </div>
      </div>
    </section>
  );
}
