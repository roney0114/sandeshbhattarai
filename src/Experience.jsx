import { useState } from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaLaptopCode,
  FaNetworkWired,
  FaShieldAlt,
  FaUserTie,
  FaCloud,
  FaFolderOpen,
  FaPrint,
  FaDesktop,
  FaPalette,
  FaRobot,
  FaTools,
  FaCode,
  FaFilter,
  FaServer,
} from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Assistant IT Officer",
    company: "Government Office",
    location: "Nepal",
    period: "December 2024 – Present",
    type: "Full-Time",
    category: "government",
    description:
      "Responsible for maintaining IT infrastructure, troubleshooting computer systems, managing networking services, supporting office automation, and ensuring secure and reliable digital operations.",
    achievements: [
      "Maintained high reliability and system uptime across 50+ office computers and public service workstations.",
      "Administered local area networks (LAN), router & switch configurations, and secure data sharing.",
      "Provided daily user technical support, printer/scanner configurations, and Office 365 management.",
    ],
    cards: [
      { name: "Hardware & Systems", icon: FaDesktop },
      { name: "LAN & Network Admin", icon: FaNetworkWired },
      { name: "Printer & Peripherals", icon: FaPrint },
      { name: "Windows OS Setup", icon: FaServer },
      { name: "Network Security", icon: FaShieldAlt },
      { name: "User Tech Support", icon: FaUserTie },
      { name: "Office 365 Admin", icon: FaCloud },
      { name: "Backup & Documentation", icon: FaFolderOpen },
    ],
  },
  {
    id: 2,
    role: "Freelance IT & Web Specialist",
    company: "Self-Employed / Freelance",
    location: "Nepal",
    period: "2024 – Present",
    type: "Freelance / Project",
    category: "freelance",
    description:
      "Delivering creative design, web development, and technical support solutions for clients, local institutions, and businesses.",
    achievements: [
      "Built responsive, modern websites using React, HTML5, CSS3, and JavaScript.",
      "Designed promotional graphics, admission posters, branding assets, and digital media.",
      "Diagnosed and resolved complex hardware and software issues for personal and business computers.",
    ],
    cards: [
      { name: "Responsive Web Dev", icon: FaCode },
      { name: "Graphic & Asset Design", icon: FaPalette },
      { name: "AI Tools & Automation", icon: FaRobot },
      { name: "System Optimization", icon: FaTools },
    ],
  },
];

function Experience() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === "all") return true;
    return exp.category === activeFilter;
  });

  return (
    <section className="experience" id="experience">
      <span className="section-title">
        <FaBriefcase className="title-icon" /> EXPERIENCE
      </span>

      <h2>Professional Experience</h2>

      <p className="experience-text">
        Demonstrated track record serving as an Assistant IT Officer and
        freelance tech consultant, delivering robust IT infrastructure, web
        solutions, and digital services.
      </p>

      {/* Filter Buttons */}
      <div className="experience-filter">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          <FaFilter /> All Experience
        </button>
        <button
          className={`filter-btn ${activeFilter === "government" ? "active" : ""}`}
          onClick={() => setActiveFilter("government")}
        >
          <FaBuilding /> Government & Enterprise
        </button>
        <button
          className={`filter-btn ${activeFilter === "freelance" ? "active" : ""}`}
          onClick={() => setActiveFilter("freelance")}
        >
          <FaLaptopCode /> Freelance & Projects
        </button>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {filteredExperiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot">
              <span className="dot-inner"></span>
            </div>

            <div className="timeline-content">
              <div className="timeline-meta">
                <div className="meta-badges">
                  <span className="timeline-type-badge">{exp.type}</span>
                  <span className="timeline-date">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                </div>
                <span className="timeline-location">
                  <FaMapMarkerAlt /> {exp.location}
                </span>
              </div>

              <h3>{exp.role}</h3>

              <h4 className="timeline-company">
                <FaBuilding className="company-icon" /> {exp.company}
              </h4>

              <p className="timeline-desc">{exp.description}</p>

              {/* Achievements */}
              <div className="experience-achievements">
                <h5>Key Accomplishments & Core Duties:</h5>
                <ul>
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competencies Grid */}
              <div className="experience-grid">
                {exp.cards.map((card, idx) => {
                  const IconComponent = card.icon;
                  return (
                    <div key={idx} className="exp-card">
                      <IconComponent className="exp-card-icon" />
                      <span>{card.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;