import { motion } from 'framer-motion';

import { TypeAnimation } from 'react-type-animation';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowDown,
  FaHackerrank

} from 'react-icons/fa';
import { Link } from "react-scroll";
import profileImg from '../../assets/images/portfolio_img.png';

import './Hero.css';

function Hero() {

  return (

    <section id="home" className="hero">

      <div className="custom-container hero-wrapper">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="hero-tag">

            Welcome To My Universe ✨

          </span>

          <h1>

            Hi, I'm

            <span> Sumit Patil</span>

          </h1>

          {/* TYPING EFFECT */}
          <TypeAnimation
            sequence={[
                'Java Developer',
              2000,
              'Software Engineer',
              2000,
              'React Developer',
              2000,
              'Full Stack Developer',
              2000
              
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />

          <p>

            Passionate software developer focused on building
            scalable web applications, modern frontend experiences,
            and backend systems using React, Java, Spring Boot,
            and MERN technologies.

          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

           <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-70}
              >
              <button className="btn-custom">
                View Projects
              </button>
            </Link>

            <a
              href="/resume/Sumit Patil Software Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View Resume
            </a>

          </div>

          {/* SOCIAL ICONS */}
          <div className="hero-socials">

            <a
              href="https://github.com/sumitpatil20"
              target="_blank"
            >

              <FaGithub />

            </a>

            <a
              href="https://www.linkedin.com/in/sumit-patil-1b31a9271/"
              target="_blank"
            >

              <FaLinkedin />

            </a>
            <a
                href="https://www.hackerrank.com/profile/sumitpatil76373"
                target="_blank"
                 rel="noreferrer"
            >
                <FaHackerrank />
            </a>
            <a
                href="https://instagram.com/sumit_patil_9096"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram />
            </a>

            <a
                href="mailto:sumitpatil76373@gmail.com"
            >
                <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* GLOW CIRCLE */}
          <div className="hero-circle"></div>

          <img
            src={profileImg}
            alt="profile"
          />

        </motion.div>

      </div>

      {/* SCROLL DOWN */}
      <div className="scroll-down">

        <FaArrowDown />

      </div>

    </section>
  );
}

export default Hero;