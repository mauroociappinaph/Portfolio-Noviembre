import React, { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import CountUp from 'react-countup';

const AnimatedCounter = ({ projectsData }) => {
  const [completedProjects, setCompletedProjects] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      number: completedProjects,
      duration: 1,
    });
  }, [completedProjects, controls]);

  const incrementCompletedProjects = () => {
    setCompletedProjects(completedProjects + 1);
  };

  return (
    <div>
      <CountUp end={completedProjects} duration={1} redraw={true}>
        {({ countUpRef }) => (
          <h1>
            <span ref={countUpRef} />
          </h1>
        )}
      </CountUp>
      <button onClick={incrementCompletedProjects}>
        Completar un Proyecto
      </button>
      <h2>Proyectos Completados:</h2>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            {project.title} - {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedCounter;
