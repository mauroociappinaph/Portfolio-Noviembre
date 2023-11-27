import React from "react";
import { motion } from "framer-motion";

//import PokemonApi from "../asset/Proyectos/ApiPokemon.png";
//import Cotizador from "../asset/Proyectos/Cotizador.png";
import DealUp from "../asset/Proyectos/DealUp.png";
import PadelMdq from "../asset/Proyectos/padelmdq.png";
import CarritoCompra from "../asset/Proyectos/CarritoDeCompra.png";
import FestivalRock from "../asset/Proyectos/FestivalRock.png";
import Cotizador from "../asset/Proyectos/Cotizador.png";
import PokemonApi from "../asset/Proyectos/PokemonApi.png"

const projectsData = [
  {
    id: 4,
    title: "Deal Up!",
    description: "",
    image: DealUp,
    deployedUrl: "https://start-bussines-n21ptnn46-adielhdz.vercel.app/",
    technologies: [
      { name: "NextJS", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "Sequelize", color: "bg-lime-400 text-lime-900" },
      { name: "Tailwind", color: "bg-sky-400 text-sky-900" },
      { name: "JavaScript", color: "bg-rose-400 text-rose-900" },
      { name: "Postman", color: "bg-yellow-400 text-fuchsia-900" },
      { name: "Node JS", color: "bg-green-400 text-green-900" },
      { name: "Express", color: "bg-blue-400 text-blue-900" },
    ],
  },
  {
    id: 1,
    title: "Padel MDQ",
    description:
      "Sitio Web de que almacena las canchas de padel y facilita el contactarlas.",
    image: PadelMdq,
    deployedUrl: "https://www.padelmdq.com.ar",
    technologies: [
      { name: "React", color: "bg-fuchsia-400 text-fuchsia-900" },
      //{ name: "Web design", color: "bg-lime-400 text-lime-900" },
      { name: "Tailwind", color: "bg-sky-400 text-sky-900" },
      { name: "JavaScript", color: "bg-rose-400 text-rose-900" },
    ],
  },
  {
    id: 2,
    title: "Pokedex",
    description: "Pokedex consumiendo los datos de la API de Pokemon.",
    image: PokemonApi,
    deployedUrl: "https://pokedex-typescript-reactmc.netlify.app/",
    technologies: [
      { name: "React", color: "bg-rose-400 text-rose-900" },
      { name: "Tailwind", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "API", color: "bg-lime-400 text-lime-900" },
      { name: "TypeScript", color: "bg-sky-400 text-sky-900" },
    ],
  },
  // Agrega más proyectos aquí
  {
    id: 3,
    title: "Cotizador de monedas",
    description: "Cotizador de conversión de monedas.",
    image: Cotizador,
    deployedUrl: "https://cotizadorbymauroociappina.netlify.app/",
    technologies: [
      { name: "React", color: "bg-rose-400 text-rose-900" },
      { name: "Vite", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "JavaScript", color: "bg-lime-400 text-lime-900" },
      { name: "Tailwind", color: "bg-sky-400 text-sky-900" },
    ],
  },
  {
    id: 5,
    title: "Carrito de compra",
    description: "Una aplicación web que simula un carrito de compras, permitiendo a los usuarios agregar productos y eliminar productos.",
    image: CarritoCompra,
    deployedUrl: "https://carritodecompraciappina.netlify.app/",
    technologies: [
      { name: "HTML", color: "bg-rose-400 text-rose-900" },
      { name: "Tailwind", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "JavaScript", color: "bg-lime-400 text-lime-900" },
    ],
  },
  {
    id: 6,
    title: "Festival Rock",
    description: "Esta aplicación web dedicada a un festival musical. Contiene un Line-up, horarios de concierto y una galeria interactiva de fotos.",
    image: FestivalRock,
    deployedUrl: "https://rockfestivalmdp2022.netlify.app/",
    technologies: [
      { name: "HTML", color: "bg-rose-400 text-rose-900" },
      { name: "CSS", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "JavaScript", color: "bg-lime-400 text-lime-900" },
      { name: "GULP", color: "bg-sky-400 text-sky-900" },
      { name: "SASS", color: "bg-orange-400 text-orange-900" },
    ],
  },
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
                  {project.deployedUrl}
                </a>

                {/* Agregar el div con las tecnologías */}
                <div className="grid grid-cols-4 mt-4 items-center justify-center gap-4">
                  {project.technologies.map((technology, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 ${technology.color}`}
                    >
                      <div className="flex items-center rounded-md px-2 py-1 text-xs font-semibold">
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
