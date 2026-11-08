
import React from "react";
import "../ComponentStyles/Hero.css";

const Hero = () => {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-container">

          {/* Left side: Text content */}
          <div className="hero-content">
            <p className="hero-greeting">HELLO, I'M</p>

            <h1>
              KHALID ALAKA
              <br />
              <span className="hero-role">
                Frontend Developer
              </span>
            </h1>

            <p className="hero-description">
              I build responsive, user-friendly web applications using
              modern web technologies. I enjoy turning ideas into
              functional and engaging digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right side: Profile image */}
          <div className="hero-image">
            <img src="/khalid.jpg" alt="Khalid Alaka" />
          </div>

        </div>
      </section>
    </main>
  );
};

export default Hero;
