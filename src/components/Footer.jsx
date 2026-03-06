import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Tuyizere Shadrack
          </h2>
          <p className="text-gray-400">
            Full Stack Web Developer passionate about building modern
            web applications using React, Node.js and MongoDB.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#experience" className="hover:text-white">Journey</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Connect With Me
          </h3>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/Shadrack22788"
              target="_blank"
              className="hover:text-gray-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              target="_blank"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              target="_blank"
              className="hover:text-gray-400"
            >
              <FaXTwitter />
            </a>

          </div>

          <p className="text-gray-400 mt-4">
            📧 tuyizeresh@gmail.com
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Tuyizere Shadrack. All Rights Reserved.
      </div>
    </footer>
  );
};