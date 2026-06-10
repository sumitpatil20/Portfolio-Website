import { motion } from "framer-motion";

import "./Education.css";

function Education() {

  const educationData = [

  {
    year: "2025 - 2026",

    title: "PGCP-AC (Post Graduate Certificate in Advanced Computing)",

    institute: "CDAC Kharghar, Mumbai",

    score: "Grade: B",

    highlight:
      "Advanced Computing ",

    description:
      "Focused on Full Stack Development, Java, .NET, Databases, Data Structures and Software Engineering."
  },

  {
    year: "2021 - 2025",

    title: "Bachelor of Engineering (Computer Science)",

    institute: "KBC North Maharashtra University",

    score: "CGPA: 8.06 / 10",

    highlight:
      "Major Project: Calories Burned Prediction System",

    description:
      "Built strong foundations in programming, software engineering, databases and web technologies."
  },

  {
    year: "2019 - 2021",

    title: "Higher Secondary Certificate (HSC)",

    institute: "Maharashtra State Board",

    score: "Percentage: 79%",

    highlight:
      "Science Stream",

    description:
      "Studied Physics, Chemistry and Mathematics."
  },

  {
    year: "2018 - 2019",

    title: "Secondary School Certificate (SSC)",

    institute: "Maharashtra State Board",

    score: "Percentage: 77%",

    highlight:
      "Foundation Education",

    description:
      "Developed interest in technology and computer science."
  }

];

  return (

    <section
      id="education"
      className="education"
    >

      <div className="custom-container">

        <div className="section-title">

          <h2>Education Journey</h2>

          <p>
            Academic milestones that shaped my
            software engineering career.
          </p>

        </div>

        <div className="timeline">

          {
            educationData.map(
              (item, index) => (

              <motion.div
                key={index}
                className="timeline-item"
                initial={{
                  opacity: 0,
                  x:
                    index % 2 === 0
                    ? -100
                    : 100
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.7
                }}
                viewport={{
                  once: true
                }}
              >

                <div
                  className="timeline-dot"
                ></div>

                <div className="timeline-card glass-card">

  <span className="edu-year">
    {item.year}
  </span>

  <h3>
    {item.title}
  </h3>

  <h4>
    {item.institute}
  </h4>

  <div className="edu-badges">

    <span className="edu-score">
      {item.score}
    </span>

    <span className="edu-highlight">
      {item.highlight}
    </span>

  </div>

  <p>
    {item.description}
  </p>

</div>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Education;