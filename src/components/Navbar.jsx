
export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">Tuyizere Shadrack</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
         <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
         <li><a href="#experience" className="hover:text-yellow-400 transition">Experience</a></li>
        <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
        <li><a href="#sevices" className="hover:text-yellow-400 transition">Services</a></li>
        <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
       
       
      </ul>
    </nav>
  );
};