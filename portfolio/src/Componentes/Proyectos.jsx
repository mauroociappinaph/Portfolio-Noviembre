import React from "react";
import { motion } from "framer-motion";
import { useState , useEffect } from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import DealUp from "../asset/Proyectos/DealUp.png";
import PadelMdq from "../asset/Proyectos/padelmdq.png";
import CarritoCompra from "../asset/Proyectos/CarritoDeCompra.png";
import FestivalRock from "../asset/Proyectos/FestivalRock.png";
import Cotizador from "../asset/Proyectos/Cotizador.png";
import PokemonApi from "../asset/Proyectos/PokemonApi.png";
import Coffe from "../asset/Proyectos/Coffe.png";
import Buffet from "../asset/Proyectos/Buffet.png";
import HowsAdvisor from "../asset/Proyectos/HowsAdvisor.png";
import Packar from "../asset/Proyectos/Packar.png";

const projectsData = [
  {
    id: 4,
    title: "Deal Up!",
    description:
      "Deal Up es una aplicación Full Stack para conectar emprendedores con inversionistas.",
    image: DealUp,
    deployedUrl: "https://start-bussines-n21ptnn46-adielhdz.vercel.app/",
    gitHubUrl: "https://github.com/AdielHdz/StartBussines",
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
    id: 9,
    title: "Hows Advisor ",
    description:
      "Sitio Web de una empresa venta de trades y servicios de consultoría. Que contiene pasarela de pago aplicada con Stripe.",
    image: HowsAdvisor,
    deployedUrl: "",
    technologies: [
      { name: "React", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "Zustand", color: "bg-pink-400 text-fuchsia-900" },
      { name: "Sequelize", color: "bg-lime-400 text-lime-900" },
      { name: "Tailwind", color: "bg-sky-400 text-sky-900" },
      { name: "TypeScript", color: "bg-rose-400 text-rose-900" },
      { name: "Postman", color: "bg-yellow-400 text-fuchsia-900" },
      { name: "Node JS", color: "bg-green-400 text-green-900" },
      { name: "Express", color: "bg-blue-400 text-blue-900" },
      { name: "Stripe", color: "bg-blue-600 text-blue-900" },
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
    description:
      "Pokedex consumiendo los datos de la API de Pokemon. Permite ver todos los pokemones y entrar a los datos específicos de cada pokemon.",
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
    description:
      "Cotizador de conversión de monedas.Permite calcular el timpo de cambio entre dos tipos de monedas.",
    image: Cotizador,
    deployedUrl: "https://cotizadorbymauroociappina.netlify.app/",
    technologies: [
      { name: "Vue.js", color: "bg-rose-400 text-rose-900" },
      { name: "Vite", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "JavaScript", color: "bg-lime-400 text-lime-900" },
      { name: "Tailwind", color: "bg-sky-400 text-sky-900" },
    ],
  },
  {
    id: 5,
    title: "Carrito de compra",
    description:
      "Una aplicación web que simula un carrito de compras, permitiendo a los usuarios agregar productos y eliminar productos.",
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
    description:
      "Esta aplicación web dedicada a un festival musical. Contiene un Line-up, horarios de concierto y una galeria interactiva de fotos.",
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
  {
    id: 7,
    title: "Buffet",
    description:
      "Aplicación web de un restaurante. Contiene menu, fotos y descripción de los productos.",
    image: Buffet,
    deployedUrl: "",
    technologies: [
      { name: "HTML", color: "bg-rose-400 text-rose-900" },
      { name: "CSS", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "JavaScript", color: "bg-lime-400 text-lime-900" },
    ],
  },
  {
    id: 8,
    title: "Coffe Shop",
    description:
      "Aplicación web de una cafeteria. Contiene menu, fotos, pagina Sobre nosotros, descripción de los productos y formulario de contacto.",
    image: Coffe,
    deployedUrl: "https://blogcafeciappina.netlify.app/",
    technologies: [
      { name: "HTML", color: "bg-rose-400 text-rose-900" },
      { name: "CSS", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "JavaScript", color: "bg-lime-400 text-lime-900" },
    ],
  },
  {
    id: 10,
    title: "Packar",
    description:
      "Aplicación web de logística. Contiene menu, fotos, descripción de los productos y formulario de contacto.",
    image: Packar,
    deployedUrl: "https://packar-it.vercel.app/",
    technologies: [
      { name: "Next JS", color: "bg-rose-400 text-rose-900" },
      { name: "MongoDB", color: "bg-fuchsia-400 text-fuchsia-900" },
      { name: "Tailwind", color: "bg-sky-400 text-sky-900" },
      { name: "TypeScript", color: "bg-lime-400 text-lime-900" },
      { name: "Vercel", color: "bg-orange-400 text-orange-900" },
      { name: "Node JS", color: "bg-sky-400 text-sky-900" },
      { name: "Express", color: "bg-blue-400 text-blue-900" },
    ],
  },
];

export default function Proyectos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);
  
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event?.target?.value || "");
  };

  useEffect(() => {
    const filtered = projectsData
      .filter((project) => project?.technologies)
      .filter((project) => {
        const techLower = searchTerm.toLowerCase();
        return (
          project?.technologies?.some((tech) =>
            tech?.name?.toLowerCase()?.includes(techLower)
          )
        );
      });

    setFilteredProjects(filtered);
    setNoResults(filtered.length === 0);
  }, [searchTerm]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto grid gap-8 px-4 md:px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Mis Proyectos
          </h2>
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Busca por tecnología"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 rounded border border-gray-300"
          />
        </div>
        {noResults && (
          <p className="text-center bg-red-500 text-white p-4">
            Tecnología no encontrada
          </p>
        )}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project?.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "8px",
      }}
      className="relative group overflow-hidden rounded-lg bg-white shadow-md"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/90 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center justify-center">
        <div className="text-white text-center space-y-2 p-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm">
            {project.description}
            {project.deployedUrl && (
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold no-underline block mt-2"
              >
                {project.deployedUrl}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            )}
          </p>
        </div>
      </div>
      <div className="bottom-0 left-0 right-0 bg-primary text-white p-4 flex flex-wrap gap-2 justify-center">
        {project.technologies.map((tech, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 ${tech.color}`}
          >
            <div className="flex items-center rounded-md px-2 py-1 text-xs font-semibold">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deployedUrl: PropTypes.string,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};