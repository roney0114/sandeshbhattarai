import blogImage from "./assets/bootcamp.jpeg";
import itsupportImage from "./assets/itsupport.png";
import networkImage from "./assets/networks.png";
import {
  FaMedium,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaTags,
  FaPenNib,
  FaBookmark,
  FaExternalLinkAlt,
} from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title:
      "My Journey Through ICT Boot Camp 2026: Four Days That Changed My View on Content Creation",
    category: "Featured Reflection",
    date: "July 2026",
    readTime: "5 min read",
    platform: "Medium",
    url: "https://medium.com/@sandeshbhattarai/my-journey-through-ict-boot-camp-2026-four-days-that-changed-my-view-on-content-creation-c0737ec432a3",
    snippet:
      "A personal reflection on my four-day ICT Boot Camp experience, exploring Artificial Intelligence, content creation, branding, digital storytelling, and practical skills that transformed my perspective on digital media.",
    tags: ["Artificial Intelligence", "Content Creation", "ICT 2026", "Digital Media"],
    image: blogImage,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Essential IT Infrastructure & Hardware Troubleshooting Best Practices",
    category: "Technical Guide",
    date: "2026",
    readTime: "4 min read",
    platform: "Tech Notes",
    url: "https://medium.com/@sandeshbhattarai",
    snippet:
      "A practical guide detailing systematic hardware diagnostics, network printer setup, Windows OS deployment, and user technical support strategies for institutional IT teams.",
    tags: ["IT Support", "Hardware Repair", "Networking", "System Reliability"],
    image: itsupportImage,
    isFeatured: false,
  },
  {
    id: 3,
    title: "Configuring Secure LAN & Network Architectures for Small Organizations",
    category: "Infrastructure",
    date: "2026",
    readTime: "6 min read",
    platform: "Tech Notes",
    url: "https://medium.com/@sandeshbhattarai",
    snippet:
      "Key considerations for router & switch configurations, local IP management, secure file sharing, and maintaining reliable bandwidth across multi-station environments.",
    tags: ["Networking", "LAN Administration", "Security", "Windows Server"],
    image: networkImage,
    isFeatured: false,
  },
];

function Blog() {
  return (
    <section className="blog" id="blog">
      <span className="section-title">
        <FaPenNib className="title-icon" /> MY WRITING
      </span>

      <h2>Latest Articles & Reflections</h2>

      <p className="blog-subtitle">
        Thoughts, experiences, and technical guides on technology, artificial
        intelligence, IT support, and digital content creation.
      </p>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className={`blog-card ${post.isFeatured ? "featured-card" : ""}`}
          >
            <div className="blog-info">
              <div className="blog-badge-wrapper">
                {post.isFeatured && (
                  <span className="featured-badge">
                    <FaBookmark /> Featured
                  </span>
                )}
                <span className="blog-category">{post.category}</span>
                <span className="blog-platform">
                  <FaMedium /> {post.platform}
                </span>
              </div>

              <h3>{post.title}</h3>

              <div className="blog-meta-box">
                <span>
                  <FaCalendarAlt /> {post.date}
                </span>
                <span>
                  <FaClock /> {post.readTime}
                </span>
              </div>

              <p>{post.snippet}</p>

              {/* Tag Chips */}
              <div className="blog-tags">
                <FaTags className="tag-icon" />
                {post.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>

              <div className="blog-btn">
                Read Article on Medium <FaArrowRight className="btn-arrow" />
              </div>
            </div>

            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <div className="blog-image-overlay">
                <span className="read-overlay-btn">
                  Read Article <FaExternalLinkAlt />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Blog;