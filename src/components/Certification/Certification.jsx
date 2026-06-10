import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import oracleSql from "../../assets/images/sql-oracle.png";
import javaHackerrank from "../../assets/images/java-hackerrank.png";
import sqlHackerrank from "../../assets/images/sql-hackerrank.png";
import javaFullStack from "../../assets/images/full-stack-java-scdl.png";
import javaInfoPlanet from "../../assets/images/java-info-planet (1).png";
import aiYhills from "../../assets/images/ai-yhills.png"
import "./Certification.css";

function Certification() {

  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
     {
      id: 1,
      title: "Full Stack Java",
      issuer: "SCDL",
      image: javaFullStack,
      year: "2025"
     },

    {
      id: 2,
      title: "Java Certificate",
      issuer: "HackerRank",
      image: javaHackerrank,
      year: "2026"
    },

    {
      id: 3,
      title: "SQL Certificate",
      issuer: "HackerRank",
      image: sqlHackerrank,
      year: "2026"
    },
     {
      id: 4,
      title: "Aritificial Intelligence ",
      issuer: "Yhills",
      image: aiYhills,
      year: "2024"
    },
    {
      id: 5,
      title: "Oracle Database Foundations",
      issuer: "Oracle",
      image: oracleSql,
      year: "2023"
    }
   ,

    {
      id: 6,
      title: "Java Programming",
      issuer: "Info Planet",
      image: javaInfoPlanet,
      year: "2023"
    }
  ];

  return (
    <section
      id="certifications"
      className="certifications"
    >

      <div className="custom-container">

        <div className="section-title">

          <h2>Certification Vault</h2>

          <p>
            Professional certifications validating my
            technical knowledge and continuous learning.
          </p>

        </div>

        <div className="cert-grid">

          {
            certificates.map((cert) => (

              <motion.div
                key={cert.id}
                className="cert-card"
                whileHover={{
                  y: -10,
                  scale: 1.03
                }}
                onClick={() =>
                  setSelectedCert(cert)
                }
              >

                <div className="cert-image">

                  <img
                    src={cert.image}
                    alt={cert.title}
                  />

                </div>

                <div className="cert-content">

                  <h3>{cert.title}</h3>

                  <p>{cert.issuer}</p>

                  <span>{cert.year}</span>

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>

      {/* MODAL */}

      <AnimatePresence>

        {
          selectedCert && (

            <motion.div
              className="cert-modal"
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              onClick={() =>
                setSelectedCert(null)
              }
            >

              <motion.div
                className="cert-modal-content"
                initial={{
                  scale: 0.8
                }}
                animate={{
                  scale: 1
                }}
                exit={{
                  scale: 0.8
                }}
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                />

                <h3>
                  {selectedCert.title}
                </h3>

                <p>
                  {selectedCert.issuer}
                </p>

              </motion.div>

            </motion.div>

          )
        }

      </AnimatePresence>

    </section>
  );
}

export default Certification;