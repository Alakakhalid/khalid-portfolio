import React from "react";
import "../ComponentStyles/Footer.css";

/* ===== Edit these values ===== */
const NAME = "Khalid Alaka";
const ROLE = "Frontend Developer";
const EMAIL = "alakakhalid852@gmail.com";
const GITHUB_URL = "https://github.com/Alakakhalid";
const LINKEDIN_URL = "https://www.linkedin.com/in/alaka-khalid-b52337449/";
/* ============================== */

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
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

const socials = [
  {
    label: "GitHub",
    href: GITHUB_URL,
    external: true,
    icon: (
      <Icon>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </Icon>
    ),
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    external: true,
    icon: (
      <Icon>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </Icon>
    ),
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: (
      <Icon>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </Icon>
    ),
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            {NAME.split(" ")[0].toUpperCase()}
            <span>.</span>
          </h2>
          <p>
            {ROLE} building fast, accessible and user-friendly web
            applications.
          </p>
          <p className="footer-status">
            <span className="footer-dot" aria-hidden="true" />
            Open to new opportunities
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-connect">
          <h3>Connect</h3>
          <div className="footer-socials">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                title={item.label}
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <a href={`mailto:${EMAIL}`} className="footer-email">
            {EMAIL}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
        <a href="#home" className="footer-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;