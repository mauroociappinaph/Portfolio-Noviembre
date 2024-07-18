import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-primary p-4 text-white text-center ">
    <div className="flex justify-center space-x-4 m-4">
      <a
        href="https://www.linkedin.com/in/maurojoseciappina/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/mauroociappinaph"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black transition duration-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="mailto:ciappinamaurooj@gmail.com"
        className="hover:text-red-500 transition duration-300"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
   
    <p className="text-sm text-gray-400">
      &copy; {new Date().getFullYear()} Mauro José Ciappina. Todos los derechos
      reservados.
    </p>
  </footer>
);

export default Footer;
