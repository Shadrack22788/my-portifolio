
import Pastedimage from "../assets/Pastedimage.png";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-400 to-indigo-500 h-screen justify-center items-center text-center md:text-left px-6 overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-bounce top-10 left-10"></div>
        <div className="absolute w-24 h-24 bg-white rounded-full opacity-10 animate-pulse top-60 right-20"></div>
        <div className="absolute w-40 h-40 border-2 border-white rounded-full opacity-20 animate-spin slow-spin bottom-20 left-20"></div>
      </div>

      <div className="z-10 px-6 md:w-1/2 ml-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Hello, I'm <br /> Tuyizere Shadrack
        </h1>
        <TypeAnimation
          sequence={[
            "Web Developer 💻",
            2000,
            "React Enthusiast ⚛️",
            2000,
            "Excel & Data Analytics 📊",
            2000,
          ]}
          wrapper="p"
          className="text-lg md:text-2xl mb-6 text-white"
          repeat={Infinity}
        />
        <a
          href="#projects"
          className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:scale-105 transition transform shadow-lg"
        >
          View My Work
        </a>
      </div>
      
      <div className="z-10 mt-10 md:mt-0 md:ml-10 md:w-1/2 flex justify-center">
        <img
          className="w-[250px] h-[250px] rounded-full"
          src={Pastedimage}
          alt="Tuyizere Shadrack"
        />
      </div>
    </section>
  );
};