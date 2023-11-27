import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import imagen2 from "../asset/vecteezy_powder-ink-powder-in-a-bottle-beautiful-power-bright-ink_26802209_665.png";

const AboutMe = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8   bg-secondary bg-opacity-75 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-center">
          <motion.div
            className="lg:w-full flex flex-col lg:flex-row items-center"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <div className="lg:w-1/2">
              <motion.img
                src={imagen2}
                alt="Imagen 2"
                className="max-w-full"
                initial="hidden"
                animate={controls}
                variants={textVariants}
              />
            </div>
            <div className="lg:w-1/2 mb-4 ">
              <motion.h2
                className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold"
                variants={textVariants}
              >
                Acerca de Mí
              </motion.h2>
              <motion.p
                className="text-white text-lg sm:text-xl md:text-2xl mt-4"
                variants={textVariants}
              >
                Soy Mauro Ciappina Técnico Universitario en Comunicación
                Audiovisual y Full Stack Developer. Me describo como una persona
                autodidacta y siempre buscando mejorar mis habilidades en la
                programación y personales. Mi objetivo como programador es
                combinar mi background como comunicador audiovisual con la
                programación para crear experiencias digitales novedosas y
                dinámicas.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
/*
Tu background como comunicador audiovisual te da una serie de habilidades que son muy valiosas en el campo de la programación, tanto front-end como back-end. Estas habilidades incluyen:

SKILLS

Creatividad: Como comunicador audiovisuales soy expertos en crear contenido visual y multimedia que sean atractivos. Lo que me permite desarrollo de interfaces de usuario (UI) y experiencias de usuario (UX) efectivas.

Comunicación: Como comunicador audiovisuales soy expertos en comunicar ideas de manera clara y concisa. Esta habilidad es esencial para la documentación de código y la comunicación con otros desarrolladores.

Problema-solving: Como comunicador audiovisual estoy acostumbrados a pensar fuera de la caja y encontrar soluciones creativas a los problemas. Una habilidad la cual aplico para el desarrollo de software eficaz.

SOFT-SKILLS




*/
