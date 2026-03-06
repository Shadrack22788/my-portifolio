export const Hero = () => {
  return (
    <section className="flex bg-gray-200 h-screen justify-center items-center text-center px-4" >
      <div className="px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-4  hover:text-blue-500 transition p-4">Hello, I'm <br /> Tuyizere Shadrack</h2>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Web Developer | React Enthusiast | Excel & Data Analytics
        </p>
        <a
          href="#projects"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          View My Work
        </a>
      </div>
      <div>
        <img className="w-[250px] h-[250px] rounded-full" src="src/assets/Pasted image.png" alt="My Picture"/>
      </div>

    </section>
  );
};