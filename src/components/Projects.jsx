const projects = [
  {
    title: "Community Services App",
    description: "A full-stack React & Node.js app for user registration, authentication, and member dashboards.",
    link: "https://github.com/Alight-Rw/Community-Services-Server",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Calculator",
    description: "A full-stack web calculator app built with Node.js and Express. It allows users to perform basic and advanced calculations, stores calculation history in MongoDB, and ensures secure user sessions with JWT authentication.",
    link: "https://github.com/Shadrack22788/calculator.git",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "EmailJS"],
  },
  {
    title: "Excel Data Dashboards",
    description: "Data visualization and analysis using Excel to create dynamic dashboards.",
    link: "#",
    tech: ["Excel", "Formulas", "Charts", "Pivot Tables"],
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern React portfolio website showcasing my projects and skills.",
    link: "#",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },

  {
    title: "Saving Platform",
    description: "A web application designed to help users manage and save money efficiently. Built with React and Tailwind CSS, it provides a user-friendly interface to track savings, set goals, and visualize financial progress, solving real-world money management challenges.",
    link: "https://github.com/Shadrack22788/saving-portifolio.git",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-4">{proj.description}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <a
              href={proj.link}
              target="_blank"
              className="text-yellow-500 font-semibold hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};