const skillCategories = [
  {
    id: 1,
    title: "IT Support & Maintenance",
    icon: "💻",
    level: "Expert",
    description:
      "Hardware troubleshooting, OS installation, Office 365 administration, and reliable user technical support.",
    tags: [
      "Computer Repair",
      "Hardware",
      "Software",
      "Windows",
      "Printer Config",
      "Office 365",
      "User Support",
      "System Maintenance",
    ],
  },
  {
    id: 2,
    title: "Networking & Administration",
    icon: "🌐",
    level: "Advanced",
    description:
      "LAN deployment, router & switch configuration, TCP/IP networking, and secure IT infrastructure management.",
    tags: [
      "LAN Setup",
      "Routers & Switches",
      "TCP/IP",
      "DNS / DHCP",
      "Wi-Fi Admin",
      "Network Security",
      "File Sharing",
    ],
  },
  {
    id: 3,
    title: "Web Development",
    icon: "🌍",
    level: "Advanced",
    description:
      "Building responsive, fast, and modern web interfaces using React, HTML5, CSS3, and JavaScript.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
      "Git & GitHub",
      "Responsive UI",
    ],
  },
  {
    id: 4,
    title: "Graphic Design & AI Tools",
    icon: "🎨",
    level: "Proficient",
    description:
      "Designing promotional materials, social media graphics, branding, and leveraging generative AI creation tools.",
    tags: [
      "Photoshop",
      "Illustrator",
      "Canva",
      "ChatGPT",
      "Gemini",
      "Google Flow",
      "CapCut Video",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <span className="section-title">MY EXPERTISE</span>

      <h2>Technical Skills & Expertise</h2>

      <p className="skills-text">
        Technologies, tools, and platforms I use daily to build, maintain,
        and support modern digital solutions.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-card">
            <div className="skill-header">
              <div className="skill-icon-wrapper">
                <span className="skill-icon">{category.icon}</span>
              </div>
              <div>
                <h3>{category.title}</h3>
                <span className="skill-level-badge">{category.level}</span>
              </div>
            </div>

            <p className="skill-desc">{category.description}</p>

            {/* Tech Tags */}
            <div className="tags">
              {category.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;