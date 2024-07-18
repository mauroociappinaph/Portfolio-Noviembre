import React from "react";
import PropTypes from "prop-types";
import {
  FaJs,
  FaStoreAlt,
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3,
  FaCode,
  FaServer,
  FaSitemap,
  FaDatabase,
  FaStore,
} from "react-icons/fa";
import { FaVuejs } from "react-icons/fa"; // Import FaVuejs separately to avoid the "Vuejs: Unknown word" error

const TechnologyItem = ({ tech }) => {
  if (!tech?.icon || !tech?.name) {
    // Use optional chaining
    throw new Error("Invalid technology object");
  }

  return (
    <div className="bg-primary p-4 rounded-md text-white text-center flex flex-col items-center justify-center">
      {tech.icon}
      <p className="mt-2 text-lg font-medium">{tech.name}</p>
    </div>
  );
};

TechnologyItem.propTypes = {
  // Add prop types validation
  tech: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const TechnologiesList = () => {
  let technologies = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "VueJS", icon: <FaVuejs /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "TypeScript", icon: <FaCode /> },
    { name: "Express", icon: <FaServer /> },
    { name: "Redux", icon: <FaSitemap /> },
    { name: "Zustand", icon: <FaStore /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "Tailwind", icon: <FaSitemap /> },
  ];

  technologies = technologies.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-secondary rounded">
      <h1 className="text-5xl font-semibold text-center mb-4 text-white">
        Tecnologías
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {technologies.map((technology, index) => (
          <TechnologyItem tech={technology} key={technology.name} /> // Use technology name as key instead of index
        ))}
      </div>
    </div>
  );
};

export default TechnologiesList;
