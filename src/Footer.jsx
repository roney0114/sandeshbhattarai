import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>
            Sandesh Bhattarai<span className="logo-dot">.</span>
          </h2>
          <p>
            Assistant IT Officer • IT Student • Web Developer • Graphic Designer
            • Content Creator
          </p>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-right">
          <h4>Follow Me</h4>
          <div className="footer-social">
            <a
              href="https://facebook.com/sandesh.bhattarai.775"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com/in/sandesh-bhattarai-b2b384281"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/roney0114"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://medium.com/@sandeshbhattarai"
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
            >
              <FaMedium />
            </a>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <strong>Sandesh Bhattarai</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;