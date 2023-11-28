/*
Tu background como comunicador audiovisual te da una serie de habilidades que son muy valiosas en el campo de la programación, tanto front-end como back-end. Estas habilidades incluyen:

SKILLS

Creatividad: Como comunicador audiovisuales soy expertos en crear contenido visual y multimedia que sean atractivos. Lo que me permite desarrollo de interfaces de usuario (UI) y experiencias de usuario (UX) efectivas.

Comunicación: Como comunicador audiovisuales soy expertos en comunicar ideas de manera clara y concisa. Esta habilidad es esencial para la documentación de código y la comunicación con otros desarrolladores.

Problema-solving: Como comunicador audiovisual estoy acostumbrados a pensar fuera de la caja y encontrar soluciones creativas a los problemas. Una habilidad la cual aplico para el desarrollo de software eficaz.

SOFT-SKILLS




*/

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Softkills = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start("visible");
  }, [animationControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary bg-opacity-75">
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-center">
          <motion.div
            className="lg:w-full flex flex-col lg:flex-row items-center"
            initial="hidden"
            animate={animationControls}
            variants={containerVariants}
          >
            <div>
              <h1 className="text-4xl font-bold mb-4">Softkills</h1>
              <p className="text-lg">
                Tu background como comunicador audiovisual te da una serie de habilidades que son muy valiosas en el campo de la programación, tanto front-end como back-end. Estas habilidades incluyen:
              </p>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">SKILLS</h2>
                <ul className="list-disc list-inside">
                  <li>Creatividad: Como comunicador audiovisual, soy experto en crear contenido visual y multimedia atractivo, lo que me permite desarrollar interfaces de usuario (UI) y experiencias de usuario (UX) efectivas.</li>
                  <li>Comunicación: Como comunicador audiovisual, soy experto en comunicar ideas de manera clara y concisa. Esta habilidad es esencial para la documentación de código y la comunicación con otros desarrolladores.</li>
                  <li>Problema-solving: Como comunicador audiovisual, estoy acostumbrado a pensar fuera de la caja y encontrar soluciones creativas a los problemas. Aplico esta habilidad para el desarrollo de software eficaz.</li>
                </ul>
              </div>
              <p className="text-lg">SOFT-SKILLS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Softkills;
