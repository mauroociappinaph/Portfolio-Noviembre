import React from "react";
import { motion } from "framer-motion";

const TextComponent = ({ textVariants }) => (
  <div className="lg:w-1/2 mb-4">
    <motion.h2
      className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold"
      variants={textVariants}
    >
      Acerca de Mí
    </motion.h2>
    <motion.p className="text-white text-lg sm:text-xl md:text-2xl mt-4" variants={textVariants}>
      Soy Mauro Ciappina Técnico Universitario en Comunicación Audiovisual y Full Stack Developer. Me describo como una persona autodidacta y siempre buscando mejorar mis habilidades en la programación y personales. Mi objetivo como programador es combinar mi background como comunicador audiovisual con la programación para crear experiencias digitales novedosas y dinámicas.
    </motion.p>
  </div>
);

export default TextComponent;
