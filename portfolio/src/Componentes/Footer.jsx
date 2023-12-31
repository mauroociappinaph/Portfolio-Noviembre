import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-primary p-4 text-white text-center">
    <div className="flex justify-center space-x-4">
      <a href="https://www.linkedin.com/in/maurojoseciappina/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/mauroociappinaph" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a href="https://twitter.com/mauroo_jose" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} />
      </a>
    </div>
    <p className="mt-4 text-sm">Contacto: ciappinamaurooj@gmail.com</p>
  </footer>
);

export default Footer;
