export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Meenakshi A M. All rights reserved.
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/MeenakshiAM"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/me__ka_4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  }
  