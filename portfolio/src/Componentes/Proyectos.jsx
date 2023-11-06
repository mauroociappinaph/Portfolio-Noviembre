import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const projectsData = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción del Proyecto 1",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción del Proyecto 2",
    },
    // Agrega más proyectos aquí
  ];
  

const Proyectos = () => {
  return (
    <div className="bg-primary py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Agregar fondo semi-transparente */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "url('https://tenor.com/view/earth-planet-globe-environment-black-and-white-gif-5533046')",
          backgroundSize: 'cover',
          filter: 'grayscale(100%)',
          opacity: 0.6, // Ajusta la opacidad aquí
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto relative z-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Proyectos
        </h1>
        <AnimatedCounter />
      </div>
    </div>
  );
};

export default Proyectos;
