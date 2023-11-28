import React from "react";
import { FaJs, FaMobile ,FaReact, FaNode, FaHtml5, FaCss3, FaCode, FaServer, FaSitemap, FaCodeBranch, FaDatabase } from "react-icons/fa";

const TechnologyItem = ({ tech, index }) => (
  <div className="bg-primary p-4 rounded-md text-white text-center flex flex-col items-center justify-center">
    {tech.icon}
    <p className="mt-2 text-lg font-medium">{tech.name}</p>
  </div>
);

const Technologies = () => {
  const technologies = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "TypeScript", icon: <FaCode /> },
    { name: "Express", icon: <FaServer /> },
    { name: "Redux", icon: <FaSitemap /> },
    { name: "Sequelize", icon: <FaCodeBranch /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "Tailwind", icon: <FaSitemap /> },
    { name: "React Native", icon: <FaMobile /> },
    
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-secondary rounded">
      <h1 className="text-5xl font-semibold text-center mb-4 text-white">Tecnologías</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {technologies.map((tech, index) => (
          <TechnologyItem tech={tech} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
