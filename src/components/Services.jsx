import { FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Frontend Development",
      description:
        "Building responsive and modern user interfaces using React, JavaScript and Tailwind CSS.",
    },
    {
      icon: <FaServer size={40} />,
      title: "Backend Development",
      description:
        "Creating secure APIs and backend systems using Node.js, Express and MongoDB.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Responsive Websites",
      description:
        "Designing websites that work perfectly on mobile, tablet and desktop devices.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          What I Can Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition text-center"
            >

              <div className="text-blue-500 mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};