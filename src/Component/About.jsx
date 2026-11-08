import React from "react";
import "../ComponentStyles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-heading">
          <p className="section-subtitle">GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Frontend Developer Who Turns Ideas Into Working Products</h3>

            <p>
              I'm Khalid Alaka, an Information Systems graduate and Frontend
              Developer with a passion for building responsive, user-friendly
              web applications. My background helps me understand both the
              technical side of development and the needs of users and
              businesses.
            </p>

            <p>
              I work with HTML, CSS, JavaScript, React.js and Tailwind CSS to
              create functional and engaging digital experiences. I also have
              experience with Node.js, Express.js and MongoDB, and I'm
              continuously developing my backend skills as I work towards
              becoming a Full-Stack Developer.
            </p>

            <p>
              I'm looking for opportunities where I can contribute to real-world
              projects, collaborate with other developers, learn from
              experienced professionals and continue growing in the tech
              industry.
            </p>

            <div className="about-buttons">
              <a href="#contact" className="btn-primary">
                Let's Talk
              </a>

              <a
                href="/AlakaKhalid Original Resume.pdf"
                download
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight">
              <h4>React.js</h4>
              <p>Primary Frontend Technology</p>
            </div>

            <div className="highlight">
              <h4>Full-Stack</h4>
              <p>Currently Expanding My Skills</p>
            </div>

            <div className="highlight">
              <h4>Open</h4>
              <p>To Career Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
