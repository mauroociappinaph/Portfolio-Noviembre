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
} from "react-icons/fa";
import { FaVuejs } from "react-icons/fa"; // Import FaVuejs separately to avoid the "Vuejs: Unknown word" error

const TechnologyItem = React.memo(({ tech }) => {
  if (!tech?.icon || !tech?.name) {
    throw new Error("Invalid technology object");
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary rounded-md p-3 flex items-center justify-center">
            {React.cloneElement(tech.icon, { className: "text-white" })}
          </div>
          <h3 className="text-xl font-semibold text-primary-foreground">{tech.name}</h3>
        </div>
      </div>
    </div>
  );
});

TechnologyItem.propTypes = {
  tech: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
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
    database: [{ name: "MongoDB", icon: <FaDatabase /> }],
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-secondary rounded-lg shadow-md">
      <h1 className="text-5xl font-semibold text-center mb-8 text-white">
        Tecnologías
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(technologies).map((category) => (
          <div key={category} className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-4 text-white capitalize">
              {category.replace(/([A-Z])/g, " $1")}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-8 w-full md:w-3/4 mx-auto" >
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

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function EclipseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}