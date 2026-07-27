import { useState } from "react";
import {
  FaConciergeBell,
  FaPalette,
  FaCode,
  FaTools,
  FaBuilding,
  FaRobot,
  FaNetworkWired,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
  FaFilter,
} from "react-icons/fa";

import networkImage from "./assets/networks.png";
import government from "./assets/government.png";
import website from "./assets/website.png";
import Troubleshoot from "./assets/itsupport.png";
import graphic from "./assets/graphic.png";
import content from "./assets/contents.png";

const servicesData = [
  {
    id: 1,
    title: "Graphic Design & Visual Branding",
    category: "Creative Design",
    icon: FaPalette,
    image: graphic,
    badge: "Popular Service",
    description:
      "Designing high-impact admission posters, social media graphics, branding assets, logos, and promotional marketing materials.",
    details:
      "Delivering end-to-end visual identity and graphic design solutions tailored for educational institutions, corporate businesses, and personal brands.",
    features: [
      "Custom Social Media & Admission Posters",
      "Vector Logo & Branding Identity Setup",
      "Brochures, Banners & Print Marketing Assets",
      "High-Resolution Print & Digital Export Formats",
    ],
    tech: ["Photoshop", "Illustrator", "Canva"],
  },
  {
    id: 2,
    title: "Web Design & Development",
    category: "Development",
    icon: FaCode,
    image: website,
    badge: "High Demand",
    description:
      "Building modern, fast, and responsive websites using React, HTML5, CSS3, and JavaScript with mobile-first design.",
    details:
      "Crafting clean, pixel-perfect front-end web applications with intuitive navigation, fluid micro-animations, fast load times, and SEO best practices.",
    features: [
      "Responsive React & HTML5/CSS3 Development",
      "Custom Layout Design & Modern Typography",
      "SEO Optimization & Fast Load Speeds",
      "Cross-Browser & Mobile Device Compatibility",
    ],
    tech: ["React", "HTML5", "CSS3", "JavaScript", "Vite"],
  },
  {
    id: 3,
    title: "Computer Systems & IT Support",
    category: "IT Support",
    icon: FaTools,
    image: Troubleshoot,
    badge: "24/7 SLA Support",
    description:
      "Comprehensive diagnostic and repair services covering hardware troubleshooting, OS installations, and system optimization.",
    details:
      "Resolving complex computer hardware and software failures, system crashes, virus infections, printer configurations, and routine maintenance.",
    features: [
      "Hardware Diagnostics & Component Upgrades",
      "Windows OS Installation & Driver Config",
      "Malware Removal & System Speed Optimization",
      "Printer, Scanner & Peripheral Setup",
    ],
    tech: ["Windows OS", "Hardware", "Drivers", "System Security"],
  },
  {
    id: 4,
    title: "Enterprise & Government IT Services",
    category: "Professional Services",
    icon: FaBuilding,
    image: government,
    badge: "Enterprise Grade",
    description:
      "Managing office computer infrastructure, public service digital operations, user technical support, and office automation.",
    details:
      "Delivering official IT administration for institutional environments, maintaining high uptime, secure data management, and user training.",
    features: [
      "Office 365 & User Account Management",
      "Infrastructure Reliability & Workstation Support",
      "Secure Data Backup & Document Management",
      "Public Service Station & Kiosk Maintenance",
    ],
    tech: ["Office 365", "Active Directory", "IT Management"],
  },
  {
    id: 5,
    title: "Digital Content & AI Media Creation",
    category: "Digital Media",
    icon: FaRobot,
    image: content,
    badge: "AI Powered",
    description:
      "Creating promotional digital content, social media campaigns, video ads, and AI-assisted multimedia graphics.",
    details:
      "Leveraging advanced generative AI tools and video editing workflows to produce engaging visual assets and multi-channel marketing campaigns.",
    features: [
      "Generative AI Content & Graphics Creation",
      "Social Media Video Editing & Ads",
      "Promotional Campaign Asset Packages",
      "Copywriting & Script Assistance",
    ],
    tech: ["ChatGPT", "Gemini", "Canva", "CapCut", "Generative AI"],
  },
  {
    id: 6,
    title: "Networking & Infrastructure Admin",
    category: "Infrastructure",
    icon: FaNetworkWired,
    image: networkImage,
    badge: "Reliable Networks",
    description:
      "Configuring local area networks (LAN), routers, switches, internet connectivity, secure file sharing, and office network environments.",
    details:
      "End-to-end network deployment, IP address planning, router & switch configuration, bandwidth management, and secure file server setup.",
    features: [
      "LAN Setup, Router & Switch Configuration",
      "Secure Office File Sharing Architecture",
      "Internet Bandwidth & Access Management",
      "Network Printer & Server Maintenance",
    ],
    tech: ["LAN/WAN", "Routers", "Switches", "Windows Server"],
  },
];

const categories = [
  "All",
  "Creative Design",
  "Development",
  "IT Support",
  "Professional Services",
  "Digital Media",
  "Infrastructure",
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices =
    activeCategory === "All"
      ? servicesData
      : servicesData.filter((item) => item.category === activeCategory);

  return (
    <section className="portfolio services-section" id="services">
      {/* Target anchor alias for portfolio navigation links */}
      <div id="portfolio" style={{ position: "absolute", top: 0 }}></div>

      <span className="section-title">
        <FaConciergeBell className="title-icon" /> MY SERVICES
      </span>
      <h2>Professional Services I Offer</h2>
      <p className="portfolio-text">
        I provide high-quality creative design, technical IT support, web
        development, and digital media solutions tailored to empower individuals,
        businesses, and organizations.
      </p>

      {/* Filter Tabs */}
      <div className="portfolio-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === "All" ? <FaFilter /> : null} {cat}
          </button>
        ))}
      </div>

      {/* Services Grid - Image Cards with Direct Modal Trigger */}
      <div className="portfolio-grid">
        {filteredServices.map((service) => {
          const ServiceIcon = service.icon;
          return (
            <div
              key={service.id}
              className="project-card service-card-image-only"
              onClick={() => setSelectedService(service)}
            >
              <div className="project-img-wrapper">
                <img src={service.image} alt={service.title} />
                <span className="service-badge">{service.badge}</span>
                <div className="project-overlay">
                  <div className="overlay-info">
                    <div className="overlay-icon-wrapper">
                      <ServiceIcon />
                    </div>
                    <h3>{service.title}</h3>
                    <span className="overlay-category">{service.category}</span>
                    <button className="view-details-btn">
                      View Details & Scope <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="service-card-footer">
                <div className="footer-title-wrap">
                  <ServiceIcon className="footer-icon" />
                  <h3>{service.title}</h3>
                </div>
                <span className="footer-category">{service.category}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Service Details & Scope Modal */}
      {selectedService && (
        <div
          className="portfolio-modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="portfolio-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="portfolio-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="modal-img-container">
              <img src={selectedService.image} alt={selectedService.title} />
              <span className="service-modal-badge">{selectedService.badge}</span>
            </div>

            <div className="portfolio-modal-body">
              <div className="modal-category-header">
                <span className="project-category">{selectedService.category}</span>
              </div>

              <h3>{selectedService.title}</h3>
              <p className="modal-description">{selectedService.details}</p>

              {/* Service Scope Deliverables Checklist */}
              <div className="modal-deliverables-box">
                <h4>Key Service Deliverables:</h4>
                <ul>
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="feature-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h4>Technologies & Tools:</h4>
              <div className="project-tech" style={{ marginBottom: "25px" }}>
                {selectedService.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <a
                href="#contact"
                className="modal-cta-btn"
                onClick={() => setSelectedService(null)}
              >
                Request This Service 🚀
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;