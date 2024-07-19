import React from "react";
import { useSpring, animated } from 'react-spring';

const skills = [
  {
    title: "Creatividad",
    description:
      "Como comunicador audiovisual, soy experto en crear contenido visual y multimedia atractivo, lo que me permite desarrollar interfaces de usuario (UI) y experiencias de usuario (UX) efectivas.",
  },
  {
    title: "Comunicación",
    description:
      "Como comunicador audiovisual, soy experto en comunicar ideas de manera clara y concisa. Esta habilidad es esencial para la documentación de código y la comunicación con otros desarrolladores.",
  },
  {
    title: "Resolución de Problemas",
    description:
      "Como comunicador audiovisual, estoy acostumbrado a pensar fuera de la caja y encontrar soluciones creativas a los problemas. Aplico esta habilidad para el desarrollo de software eficaz.",
  },
];

const Softskills = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="p-4 md:p-8 bg-secondary py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white mb-6 col-span-1 md:col-span-2 lg:col-span-3">Soft Skills</h1>
        {skills.map((skill, index) => (
          <animated.div style={props} key={index} className="p-4 md:p-6 lg:p-8 flex flex-col items-center text-center bg-white rounded-lg shadow-md mb-4">
            <span className="p-4 md:p-5 rounded-full bg-primary text-white shadow-lg shadow-red-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-8 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-slate-700 mt-3">{skill.title}</p>
            <p className="mt-2 text-sm md:text-base text-slate-500">{skill.description}</p>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Softskills;