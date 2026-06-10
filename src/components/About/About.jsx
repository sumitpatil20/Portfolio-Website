import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDatabase
} from "react-icons/fa";

import "./About.css";

function About() {

  const technologies = [
    "React",
    "Java",
    "Spring Boot",
    "Node.js",
    "MySQL",
    "MongoDB",
    "REST API",
    "Bootstrap",
    "JavaScript"
  ];

  return (
    <section id="about" className="about">

      <div className="custom-container">

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="section-badge">
            About My Journey
          </span>

          <h2>
            Building Digital Experiences
            Through Code & Creativity
          </h2>

        </motion.div>

        <div className="about-grid">

          {/* LEFT */}
          <motion.div
            className="about-story glass-card"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3>Hello, I'm Sumit 👋</h3>

            <p>
              I'm a Full Stack Developer passionate about
              building scalable applications, modern user
              interfaces and backend systems.
            </p>

            <p>
              My journey started with learning programming
              fundamentals and gradually evolved into creating
              full-stack applications using React, Java,
              Spring Boot and modern web technologies.
            </p>

            <p>
              I enjoy solving real-world problems and turning
              ideas into products that users love.
            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="developer-card"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="developer-glow"></div>

            <div className="developer-icons">

              <FaReact />
              <FaJava />
              <FaNodeJs />
              <FaDatabase />

            </div>

            <h3>Full Stack Developer</h3>

            <p>
              React • Java • Spring Boot • Node.js
            </p>

          </motion.div>

        </div>

        {/* TECH CHIPS */}

        <motion.div
          className="tech-stack"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          {
            technologies.map((tech, index) => (

              <span
                key={index}
                className="tech-chip"
              >
                {tech}
              </span>

            ))
          }

        </motion.div>

        {/* ACHIEVEMENTS */}

        <div className="achievement-grid">

          <motion.div
            className="achievement-card glass-card"
            whileHover={{ y: -10 }}
          >
            <h3>10+</h3>
            <p>Projects Built</p>
          </motion.div>

          <motion.div
            className="achievement-card glass-card"
            whileHover={{ y: -10 }}
          >
            <h3>15+</h3>
            <p>REST APIs Developed</p>
          </motion.div>

          <motion.div
            className="achievement-card glass-card"
            whileHover={{ y: -10 }}
          >
            <h3>20+</h3>
            <p>Technologies Learned</p>
          </motion.div>

          <motion.div
            className="achievement-card glass-card"
            whileHover={{ y: -10 }}
          >
            <h3>5+</h3>
            <p>Certifications</p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;