import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";

import bookstoreImg from "../../assets/images/bookStore.png";

import tourBookingImage from "../../assets/images/TourBooking.png";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,

      title: "BookStore Ecommerce",

      image: bookstoreImg,

      demoLink:
        "https://drive.google.com/file/d/1UCTbqtTI2sHbWXFw-i4bWK-vUMVjOvOi/view?usp=drive_link",

      description:
        "Full Stack Ecommerce platform with authentication, role-based authorization, cart management, order processing and MySQL integration.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "ThunderClient",
        "JWT",
      ],

      github: "https://github.com/sumitpatil20",

      live: "#",
    },
    {
      id: 2,

      title: "Tour Booking & AI Planner System",

      image: tourBookingImage,

      demoLink:
        "https://drive.google.com/file/d/1stA0pAqp40HN8vcs3VcRpr8NDffECjds/view?usp=drive_link",

      description:
        "Full Stack travel platform with AI trip planning, tour booking, role-based authorization, package management, notifications and JWT authentication.",
      tech: [
        "Java",
        "Spring Boot",
        "ReactJS",
        "MySQL",
        "Spring Security",
        "JWT",
        "Hibernate",
        "Swagger",
      ],

      github: "https://github.com/sumitpatil20/AI-Tour-Booking-System",

      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="custom-container">
        <div className="section-title">
          <h2>Featured Projects</h2>

          <p>
            Real-world applications demonstrating full stack and backend
            development skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >
              {/* MEDIA */}

              <div className="project-media">
                <img src={project.image} alt={project.title} />

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="play-btn"
                >
                  <FaPlay />
                </a>
              </div>

              {/* CONTENT */}

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>

                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
