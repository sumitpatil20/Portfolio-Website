import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostman
} from "react-icons/si";

import { motion } from "framer-motion";

import "./Skills.css";

function Skills() {

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { name: "HTML5" },
        { name: "CSS3" }
      ]
    },

    {
      title: "Backend Development",
      skills: [
        { icon: <FaJava />, name: "Java" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" }
      ]
    },

    {
      title: "Database & Tools",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { name: "SQL Server" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiPostman />, name: "Postman" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">

      <div className="custom-container">

        <div className="section-title">
          <h2>Technical Skills</h2>

          <p>
            Technologies and tools I use to build modern software solutions.
          </p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              className="skill-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >

              <h3>{category.title}</h3>

              <div className="skill-tags">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                    className="skill-tag"
                  >
                    {skill.icon}

                    <span>{skill.name}</span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;