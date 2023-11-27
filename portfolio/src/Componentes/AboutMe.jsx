import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ImageComponent from "./Imagen"; // Assuming this is a component for displaying an image
import TextComponent from "./Text"; // Assuming this is a component for displaying text
import imagen2 from "../asset/vecteezy_powder-ink-powder-in-a-bottle-beautiful-power-bright-ink_26802209_665.png";

const AboutMe = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start("visible");
  }, [animationControls]);

  // Animation configuration
  const transitionDuration = 0.6;
  const transitionEase = "easeOut";

  // Variants for container and text animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: transitionDuration, ease: transitionEase } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: transitionDuration, ease: transitionEase } },
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
            <ImageComponent
              animationControls={animationControls}
              textVariants={textVariants}
              image={imagen2}
            />
            <TextComponent textVariants={textVariants} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
