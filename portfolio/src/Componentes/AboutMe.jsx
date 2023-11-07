import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import imagen2 from "../asset/vecteezy_powder-ink-powder-in-a-bottle-beautiful-power-bright-ink_26802209_665.png";

const AboutMe = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <motion.div
              className="mb-4 relative"
              initial="hidden"
              animate={controls}
              variants={textVariants}
            >
              <div className="lg:flex lg:space-x-8 sm:flex-col-reverse">
                <div className="lg:w-1/2">
                  <motion.h2
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold"
                  >
                    Acerca de Mí
                  </motion.h2>
                  <motion.p className="text-white text-lg sm:text-xl md:text-2xl mt-4">
                    Soy Mauro Ciappina, un comunicador audiovisual y desarrollador
                    full stack de Mar del Plata. Mi pasión por la creación visual y
                    la tecnología me ha llevado a explorar el mundo del desarrollo
                    web y móvil. Mi objetivo es combinar mis habilidades de
                    comunicación con la programación para crear experiencias
                    digitales sorprendentes.
                  </motion.p>
                </div>
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
