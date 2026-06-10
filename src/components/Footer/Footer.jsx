import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHackerrank
} from "react-icons/fa";

import "./Footer.css";

function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="footer">

      <div className="custom-container">

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <h2>Sumit Patil</h2>

            <p>
              Full Stack Developer , passionate about building
              scalable applications and modern user experiences.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div className="footer-links">

            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>

          {/* SOCIAL */}

          <div className="footer-social">

            <h4>Connect</h4>

            <div className="social-icons">

              <a
                href="https://github.com/sumitpatil20"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sumit-patil-1b31a9271"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/sumit_patil_9096/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.hackerrank.com/profile/sumitpatil76373"
                target="_blank"
                rel="noreferrer"
              >
                <FaHackerrank />
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div className="footer-divider"></div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © {year} Sumit Patil. All Rights Reserved.
          </p>

          <p>
            Built with React, Bootstrap & Framer Motion 
          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;