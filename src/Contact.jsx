import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className="contact" id="contact">
      <span className="section-title">
        <FaPaperPlane className="title-icon" /> CONTACT
      </span>

      <h2>Get In Touch</h2>

      <p className="contact-subtitle">
        Have a project in mind or need technical support? Feel free to reach out via the form below or through direct contact channels.
      </p>

      <div className="contact-wrapper">
        {/* Left Info Panel */}
        <div className="contact-left">
          <h3>Contact Information</h3>

          <p>
            Feel free to reach out for IT support, web development, graphic
            design, networking projects, or professional collaboration.
          </p>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Location</h4>
              <span>Sundarbazar, Lamjung, Nepal</span>
            </div>
          </div>

          <a href="mailto:b.sandeshbhattarai@gmail.com" className="contact-item contact-link">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <span>b.sandeshbhattarai@gmail.com</span>
            </div>
          </a>

          <a href="tel:+9779840319938" className="contact-item contact-link">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <span>+977 9840319938</span>
            </div>
          </a>

          <div className="social-icons">
            <a
              href="https://facebook.com/sandesh.bhattarai.775"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com/in/sandesh-bhattarai-b2b384281"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/roney0114"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="contact-right">
          {isSuccess && (
            <div className="contact-success-msg">
              <FaCheckCircle /> Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;