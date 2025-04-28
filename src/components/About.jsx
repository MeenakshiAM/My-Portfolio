import profileImg from "../assets/images/profile.jpg";
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
        <h2>About Me</h2>
          <p>
            Hey! I’m <strong>Meenakshi A M</strong>, a passionate web developer who loves building sleek, responsive websites with clean UI and smooth functionality.
          </p>
          <p>
            Currently, I'm diving deep into <strong>React</strong>, <strong>Node.js</strong>, and <strong>Spring Boot</strong>. I also enjoy solving DSA questions on platforms like <strong><a href="https://leetcode.com/u/MeenakshiAM/" target="_blank" rel="noopener noreferrer">Leetcode</a></strong> and <strong><a href="https://www.geeksforgeeks.org/user/miniaapp25/" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a></strong> to sharpen my problem-solving skills.
          </p>
          <p>
            When I'm not coding, you’ll probably find me playing chess ♟️, diving into books 📚, or brainstorming ideas for my next big project!
          </p>
          <p>
            I’m passionate about learning, growing, and turning ideas into reality through clean and efficient code.
          </p>
          </div>

        <div className="about-image">
          <img src={profileImg} alt="Meenakshi AM" />
        </div>
      </div>
    </section>
  );
}
