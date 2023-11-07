import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Importa motion de framer-motion

const AboutMe = () => {
  // Control de animación
  const controls = useAnimation();

  // Inicia la animación cuando el componente se monta
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Define las animaciones para los elementos
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Duración y curva de aceleración personalizada
    },
  };

  return (
    <section className="bg-secondary py-8 px-4 sm:py-16 sm:px-6 lg:px-8 xl:px-0 max-w-screen-xl mx-auto">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <motion.div
            className="mb-4"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <motion.h2 className="text-white text-2xl md:text-4xl font-semibold">
                  Acerca de Mí
                </motion.h2>
              </div>
              <div>
                <motion.p className="text-white text-base md:text-lg">
                  Soy Mauro Ciappina, un comunicador audiovisual y desarrollador
                  full stack de Mar del Plata. Mi pasión por la creación visual y
                  la tecnología me ha llevado a explorar el mundo del desarrollo
                  web y móvil. Mi objetivo es combinar mis habilidades de
                  comunicación con la programación para crear experiencias
                  digitales sorprendentes.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
