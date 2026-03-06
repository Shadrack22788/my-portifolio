import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const projectsLinks = [
    { name: "Community Services App", link: "https://github.com/Alight-Rw/Community-Services-Server" },
    { name: "Forgot Password Feature", link: "https://github.com/Alight-Rw/Community-Services-Server" },
    { name: "Excel Data Dashboards", link: "#" },
    { name: "Personal Portfolio Website", link: "#" },
    { name: "Calculator", link: "https://github.com/Shadrack22788/calculator.git" },
    { name: "Saving Platform", link: "https://github.com/Shadrack22788/saving-portifolio.git" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Name / Logo */}
        <div className="text-lg font-bold">
          Shadrack | Web Developer
        </div>

        {/* Quick Section Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Projects / Platforms Links */}
        <div>
          <h3 className="font-semibold mb-3">Projects / Platforms</h3>
          <ul className="space-y-2">
            {projectsLinks.map((proj, index) => (
              <li key={index}>
                <a href={proj.link} target="_blank" className="hover:text-yellow-400 transition">
                  {proj.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://github.com/Shadrack22788" target="_blank" className="hover:text-yellow-400 transition">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/shadrack/" target="_blank" className="hover:text-yellow-400 transition">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:tuyizeresh@gmail.com" className="hover:text-yellow-400 transition">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" className="hover:text-yellow-400 transition">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" className="hover:text-yellow-400 transition">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" className="hover:text-yellow-400 transition">
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Shadrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;