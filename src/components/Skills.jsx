import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaFigma
} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb, SiVite } from "react-icons/si";

export  const Skills = () => {
  const skills = {
    frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "90%" },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "85%" },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "80%" },
      { name: "React", icon: <FaReact className="text-cyan-400" />, level: "75%" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "85%" },
    ],

    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "70%" },
      { name: "Express", icon: <SiExpress className="text-gray-700" />, level: "65%" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: "70%" },
    ],

    tools: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: "80%" },
      { name: "GitHub", icon: <FaGithub className="text-black" />, level: "85%" },
      { name: "Figma", icon: <FaFigma className="text-purple-500" />, level: "60%" },
      { name: "Vite", icon: <SiVite className="text-purple-400" />, level: "75%" },
    ],
  };

  const SkillCard = ({ skill }) => (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition hover:scale-105">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{skill.icon}</span>
        <h3 className="font-semibold">{skill.name}</h3>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: skill.level }}
        ></div>
      </div>

      <p className="text-sm text-gray-500 mt-1">{skill.level}</p>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            Frontend Development
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.frontend.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-green-600">
            Backend Development
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.backend.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-purple-600">
            Tools & Platforms
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.tools.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};