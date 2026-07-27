import sandesh from "./assets/sandesh.png";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaDownload,
} from "react-icons/fa";

function About() {
  const infoData = [
    { icon: <FaUser />, title: "Name", value: "Sandesh Bhattarai" },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "b.sandeshbhattarai@gmail.com",
      isLink: true,
      href: "mailto:b.sandeshbhattarai@gmail.com",
    },
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Sundarbazar, Lamjung, Nepal" },
    { icon: <FaBriefcase />, title: "Profession", value: "Assistant IT Officer" },
    { icon: <FaGraduationCap />, title: "Education", value: "Information Technology Student" },
    { icon: <FaLaptopCode />, title: "Experience", value: "IT Support & Web Dev" },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left Image Section */}
        <div className="about-image-wrapper">
          <div className="about-image">
            <img src={sandesh} alt="Sandesh Bhattarai" />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="about-content">
          <span className="section-title">ABOUT ME</span>
          <h2>Assistant IT Officer & Tech Specialist</h2>

          <h3>"Failures don't stop me!" </h3>
          
          <p>
            Hello! I'm <strong>Sandesh Bhattarai</strong>, an Information
            Technology student and Assistant IT Officer from Nepal.
            I am passionate about web development, networking,
            graphic design, and modern digital technologies.
          </p>
          <p>
            I enjoy building modern websites, designing professional
            graphics, solving technical problems, and continuously
            learning new technologies that create real-world impact.
          </p>

          {/* Highlight Tags */}
          <div className="about-highlights">
            <span>⚡ Problem Solver</span>
            <span>💡 Fast Learner</span>
            <span>🛠️ IT Infrastructure</span>
            <span>🌐 Web Development</span>
          </div>

          {/* Info Grid */}
          <div className="about-info">
            {infoData.map((item, idx) => (
              <div key={idx} className="info-card">
                <div className="info-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  {item.isLink ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Download CV CTA */}
          <a href="/Sandesh-CV.pdf" download className="download-btn">
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;