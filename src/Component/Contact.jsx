import React, { useState } from "react";
import "../ComponentStyles/Contact.css";

/* ===== Edit these five values ===== */
const EMAIL = "alakakhalid852@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/alaka-khalid-b52337449/";
const GITHUB_URL = "https://github.com/Alakakhalid";
const CV_URL = "/AlakaKhalid Original Resume.pdf"; 
const FORM_ENDPOINT = "https://formspree.io/f/mljjkpek";
/* ================================== */

const initialForm = { name: "", email: "", subject: "", message: "" };

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const MailIcon = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);

const LinkedInIcon = () => (
  <Icon>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);

const GitHubIcon = () => (
  <Icon>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </Icon>
);

const DownloadIcon = () => (
  <Icon>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </Icon>
);

const ArrowIcon = () => (
  <Icon>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Icon>
);

const contactLinks = [
  {
    label: "Email",
    text: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: <MailIcon />,
  },
  {
    label: "LinkedIn",
    text: "Connect with me",
    href: LINKEDIN_URL,
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "GitHub",
    text: "View my repositories",
    href: GITHUB_URL,
    icon: <GitHubIcon />,
    external: true,
  },
];

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (!response.ok) throw new Error("Request failed");

      setFormData(initialForm);
      setStatus({
        state: "success",
        message: "Thank you! Your message has been sent. I’ll get back to you soon.",
      });
    } catch {
      setStatus({
        state: "error",
        message: `Something went wrong. Please try again, or email me directly at ${EMAIL}.`,
      });
    }
  };

  const isSending = status.state === "sending";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h2>Let’s Work Together</h2>
          <p>
            Have a role, a project or a question? Send me a message and
            I’ll get back to you as soon as I can.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-availability">
              <span className="availability-dot" aria-hidden="true" />
              Available for new opportunities
            </div>

            <h3>Let’s Connect</h3>
            <p>
              I’m looking for a Frontend or Junior Full-Stack role, and I’m
              also open to freelance projects and collaborations.
            </p>

            <ul className="contact-list">
              {contactLinks.map((item) => (
                <li className="contact-info-item" key={item.label}>
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <h4>{item.label}</h4>
                    <a
                      href={item.href}
                      {...(item.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {item.text}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <a href={CV_URL} download className="contact-cv">
              <DownloadIcon />
              Download CV
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Spam honeypot: real visitors never see or fill this */}
            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor="_gotcha">Leave this empty</label>
              <input
                type="text"
                id="_gotcha"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Frontend Developer opportunity"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me a little about the role or project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
              {!isSending && <ArrowIcon />}
            </button>

            <p
              className={`form-status form-status-${status.state}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;