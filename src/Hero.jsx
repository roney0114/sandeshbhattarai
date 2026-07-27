import { useState, useEffect } from "react";
import profile from "./assets/sandesh.png";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaArrowDown,
  FaDownload,
  FaBriefcase,
} from "react-icons/fa";

const roles = [
  "Assistant IT Officer",
  "Web Developer",
  "Graphic Designer",
  "Network Administrator",
  "Content Creator",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 90);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      {/* Background Subtle Watermark */}
      <div className="hero-bg-text">SANDESH</div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span> Available for IT & Tech Projects
          </div>

          <h1>
            Hi, I'm
            <span> Sandesh Bhattarai</span>
          </h1>

          <h2>
            I am a <span className="typewriter-text">{displayText}</span>
            <span className="typewriter-cursor">|</span>
          </h2>

          <p>
            Passionate Information Technology student from Nepal, specializing in
            Web Development, Graphic Design, Networking, Content Creation and Computer
            Troubleshooting. Dedicated to delivering reliable, modern digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              <FaBriefcase /> View My Work
            </a>

            <a href="/Sandesh-CV.pdf" className="btn-outline" download>
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://facebook.com/sandesh.bhattarai.775"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
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
              href="https://linkedin.com/in/sandesh-bhattarai-b2b384281"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="hero-right">
          <div className="hero-glow"></div>

          <div className="hero-image-box">
            <img src={profile} alt="Sandesh Bhattarai" />
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll to About">
        <FaArrowDown />
      </a>
    </section>
  );
}

export default Hero;