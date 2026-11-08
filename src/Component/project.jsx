import React from "react";
import "../ComponentStyles/project.css";

const projects = [
  {
    id: 1,
    name: "EventHub",
    category: "Full-Stack Web Application",
    description:
      "A web-based conference and event management platform that allows users to discover events, register, make ticket payments, and manage their bookings. Organizers can create and manage events through a dedicated dashboard.",
    features: [
      "User and organizer authentication with OTP email verification",
      "Event creation, management, and search",
      "Ticket booking and Paystack payment integration",
      "QR-code tickets and PDF ticket downloads",
      "Organizer dashboard and email notifications",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Nodemailer",
      "Paystack",
    ],
    image: "/eventhub-preview.jpeg",
    links: [
      {
        label: "Live Demo",
        url: "https://uniosun-event-system-3080-eent-hub.vercel.app/",
        style: "primary",
      },
      {
        label: "Frontend Code",
        url: "https://github.com/Alakakhalid/Uniosun-Event-System-3080-EentHub-",
        style: "secondary",
      },
      {
        label: "Backend Code",
        url: "https://github.com/Alakakhalid/Event-Hub-backend-",
        style: "secondary",
      },
    ],
  },
  {
    id: 2,
    name: "Travel Booking System",
    category: "Web Application",
    description:
      "A server-rendered travel website for exploring destinations, searching hotels and managing bookings. Built with Express and EJS, with a PostgreSQL database for users, bookings and reviews.",
    features: [
      "Sign up and login with hashed passwords and PostgreSQL-backed sessions",
      "Hotel search powered by the Amadeus API and Unsplash destination photos",
      "Booking flow with dates, guests and a payment step",
      "View and cancel bookings from a personal dashboard",
      "Customer reviews with ratings",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "EJS",
      "PostgreSQL",
      "bcrypt",
      "Amadeus API",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    image: "/public/travel-preview.JPG",
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/Alakakhalid/Booking-Travelling-system",
        style: "primary",
      },
    ],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p className="section-subtitle">MY WORK</p>
          <h2>Featured Projects</h2>
          <p>
            Here are some of the projects I have worked on, showcasing my
            experience in frontend and backend web development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                />
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>

                <h3>{project.name}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className={`project-btn project-btn-${link.style}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;