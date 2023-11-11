import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Padel MDQ",
    description: "Descripción del Proyecto 1",
    image: "url_de_la_imagen_1.jpg",
    deployedUrl: "https://padelmdq.com/",
    technologies: [
      { name: "React", color: "bg-fuchsia-400 text-fuchsia-900" },
      //{ name: "Web design", color: "bg-lime-400 text-lime-900" },
      { name: "Tailwind.css", color: "bg-sky-400 text-sky-900" },
      // { name: "TypeScript", color: "bg-rose-400 text-rose-900" },
    ],
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción del Proyecto 2",
    image: "url_de_la_imagen_2.jpg",
    technologies: [
      { name: "React", color: "bg-rose-400 text-rose-900" },
      { name: "Node.js", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "Express", color: "bg-lime-400 text-lime-900" },
      { name: "MongoDB", color: "bg-sky-400 text-sky-900" },
    ],
  },
  // Agrega más proyectos aquí
];

const Proyectos = () => {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 relative  bg-secondary bg-opacity-75 ">
      {/* Agregar fondo semi-transparente */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "url('https://tenor.com/view/earth-planet-globe-environment-black-and-white-gif-5533046')",
          backgroundSize: "cover",
          filter: "grayscale(100%)",
          opacity: 0.6,
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto relative z-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Proyectos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                margin: "8px",
              }}
              className="bg-white p-4 rounded shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-gray-700">
                {project.description}
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline block mt-2"
                >
                  Ver proyecto
                </a>

                {/* Agregar el div con las tecnologías */}
                <div className="flex flex-col items-center gap-y-2 md:flex-row">
                  {project.technologies.map((technology, index) => (
                    <div
                      key={index}
                      className={`ml-3 flex gap-2 ${technology.color}`}
                    >
                      <div className="rounded-md px-2 py-1 text-xs font-semibold">
                        {technology.name}
                      </div>
                    </div>
                  ))}
                </div>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
