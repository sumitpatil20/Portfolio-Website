import { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill all fields");
      return;
    }

    const whatsappMessage = `
*New Portfolio Contact*

👤 Name: ${name}

📧 Email: ${email}

📌 Subject: ${subject}

💬 Message:
${message}
`;

    const phoneNumber = "917249072386";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage,
      )}`,
      "_blank",
    );

    toast.success("Redirecting to WhatsApp...");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="custom-container">
        <div className="section-title">
          <h2>Let's Connect</h2>

          <p>
            Open to Software Development opportunities, freelance projects and
            technical collaborations. Let's connect and build impactful digital
            solutions together.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* LEFT SECTION */}

          <motion.div
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>

            <div className="info-item">
              <FaEnvelope />
              <span>sumitpatil76373@gmail.com</span>
            </div>

            <div className="info-item">
              <FaPhoneAlt />
              <span>+91 72490 72386</span>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt />
              <span>Jalgaon, Maharashtra</span>
            </div>

            <div className="info-item">
              <FaGithub />
              <a
                href="https://github.com/sumitpatil20"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
            </div>

            <div className="info-item">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/sumit-patil-1b31a9271"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* RIGHT SECTION */}

          <motion.form
            onSubmit={sendWhatsApp}
            className="contact-form glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
