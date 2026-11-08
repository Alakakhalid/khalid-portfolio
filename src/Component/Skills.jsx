import React from "react";
import "../ComponentStyles/Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    level: "Confident",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    level: "Learning",
    skills: ["Node.js", "Express.js", "MongoDB","PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Workflow",
    level: "Daily Use",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel / Netlify"],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="section-subtitle">WHAT I WORK WITH</p>
          <h2>My Technical Skills</h2>
          <p>
            The technologies I use to build responsive, accessible
            and user-friendly web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>
              <div className="skill-card-header">
                <h3>{category.title}</h3>
                <span className="skill-level">{category.level}</span>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;