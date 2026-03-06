import { useState } from "react";

export const Experience = () => {

  const [showJourney, setShowJourney] = useState(false);

  const timeline = [
    {
      year: "2025",
      title: "Started Web Development",
      description:
        "Started learning HTML, CSS and JavaScript while building practice projects.",
    },
    {
      year: "2025",
      title: "Frontend Development",
      description:
        "Learned React and Tailwind CSS and started building responsive websites.",
    },
    {
      year: "2025",
      title: "Backend Development",
      description:
        "Started working with Node.js, Express and MongoDB.",
    },
    {
      year: "2025 - Present",
      title: "Full Stack Projects",
      description:
        "Building real projects like Community Services Platform and Saving Platform.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">My Journey</h2>

        <p className="text-gray-600 mb-8">
          My path in becoming a Full Stack Developer from 2025 to today.
        </p>

        <button
          onClick={() => setShowJourney(!showJourney)}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition mb-10"
        >
          {showJourney ? "Hide My Journey" : "View My Journey"}
        </button>

        {showJourney && (
          <div className="grid md:grid-cols-2 gap-10 text-left">

            {timeline.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">

                <p className="text-sm text-gray-500">{item.year}</p>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-gray-600">{item.description}</p>

              </div>
            ))}

          </div>
        )}

      </div>

    </section>
  );
};