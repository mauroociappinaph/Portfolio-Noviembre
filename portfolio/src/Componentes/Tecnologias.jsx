import React from "react";
import PropTypes from "prop-types";
import {
  FaJs,
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

const TechnologyItem = React.memo(({ tech }) => {
  if (!tech?.icon || !tech?.name) {
    throw new Error("Invalid technology object");
  }

  return (
    <div className="bg-primary p-6 lg:p-8 rounded-md text-white text-center flex flex-col items-center justify-center">
      {tech.icon}
      <p className="mt-4 text-xl font-medium">{tech.name}</p>
    </div>
  );
});

TechnologyItem.propTypes = {
  tech: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

TechnologyItem.defaultProps = {
  tech: {
    icon: <FaCode />,
    name: 'Default Tech'
  }
};

const TechnologiesList = () => {
  const technologies = {
    frontEnd: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "VueJS", icon: <FaVuejs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "TypeScript", icon: <FaCode /> },
    ],
    backEnd: [
      { name: "Node.js", icon: <FaNode /> },
      { name: "Express", icon: <FaServer /> },
      { name: "REST API", icon: <FaSitemap /> },
    ],
    database: [
      { name: "MongoDB", icon: <FaDatabase /> },
    ],
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-secondary rounded">
      <h1 className="text-5xl font-semibold text-center mb-8 text-white">
        Tecnologías
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Object.keys(technologies).map((category) => (
          <div key={category} className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-4 text-white capitalize">
              {category.replace(/([A-Z])/g, ' $1')}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 w-full md:w-3/4 mx-auto">
              {technologies[category].map((technology) => (
                <TechnologyItem tech={technology} key={technology.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesList;