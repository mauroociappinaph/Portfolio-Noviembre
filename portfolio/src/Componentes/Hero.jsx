import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import img1 from "../asset/vecteezy_3d-male-character-engaged-in-work-on-a-laptop_24658981_575.png";

const Hero = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative bg-secondary">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between flex-wrap">
          <div className="w-full lg:w-1/2 min-w-0 mb-6 lg:mb-0">
            <div className="mb-4">
              <div className="text-white text-4xl sm:text-5xl md:text-6xl">
                Mauro José <br />
                <span className="font-extrabold text-7xl">Ciappina</span>
              </div>
              <div className="text-white text-lg sm:text-xl md:text-2xl my-4">
                Full Stack Developer
              </div>
            </div>
            <div className="mt-8">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/maurojoseciappina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  href="https://github.com/mauroociappinaph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub size={40} />
                </a>
                <a
                  href="mailto:ciappinamaurooj@gmail.com"
                  className="text-white"
                >
                  <FaEnvelope size={40} />
                </a>
              </div>
              {/* Aquí se agrega el CTA */}
              <div className="mt-8 flex align-center ">
                <a
                  href="https://calendly.com/event_types/158634324/edit?return_to=%2Fevent_types%2Fuser%2Fme" // Reemplaza con tu enlace de Calendly
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm transition-colors hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Agendar una Reunión
                </a>
              </div>
            </div>
          </div>

          {/* Aquí se agrega la imagen a la derecha */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              rel="preload"
              src={img1}
              alt="Home"
              className="w-full lg:w-3/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;