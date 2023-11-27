import React from "react";
import { motion } from "framer-motion";

const ImageComponent = ({ animationControls, textVariants, image }) => (
  <div className="lg:w-1/2">
    <motion.img
      src={image}
      alt="Imagen 2"
      className="max-w-full"
      initial="hidden"
      animate={animationControls}
      variants={textVariants}
    />
  </div>
);

export default ImageComponent;
