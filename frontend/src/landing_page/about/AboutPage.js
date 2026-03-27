import React from "react";
import "./About.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function AboutPage() {
  const team = [
    {
      name: "Lakshya",
      role: "Frontend Developer",
      img: "media/images/lakshya.png",
      desc: "Passionate about building modern and responsive user interfaces.",
      socials: {
        instagram: "https://instagram.com/",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/"
      }
    },
    {
      name: "Bhupesh",
      role: "Backend Developer",
      img: "media/images/patni2.jpg",
      desc: "Handles server-side logic and database management efficiently.",
      socials: {
        instagram: "https://instagram.com/patnibhupesh4",
        github: "https://github.com/Patni05",
        linkedin: "https://linkedin.com/in/bhupeshpatni"
      }
    },
    {
      name: "Rohit",
      role: "Designer",
      img: "media/images/lakshya.png",
      desc: "Creates beautiful and user-friendly designs.",
      socials: {
        instagram: "#",
        github: "#",
        linkedin: ""
      }
    }
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">
        We are a passionate team of 3 building amazing projects 🚀
      </p>

      <div className="team-container">
        {team.map((member, index) => (
          <div className="card" key={index}>
            <img src={member.img} alt={member.name} />
            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <p>{member.desc}</p>

            {/* ✅ Social Links Added */}
            <div className="social-icons">
              <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href={member.socials.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;