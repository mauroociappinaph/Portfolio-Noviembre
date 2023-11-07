import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import img1 from "../asset/vecteezy_3d-male-character-engaged-in-work-on-a-laptop_24658981_575.png";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between flex-wrap">
          <div className="w-full lg:w-1/2 min-w-0 mb-6 lg:mb-0">
            <motion.div
              className="mb-4"
              initial="hidden"
              animate={controls}
              variants={headerVariants}
            >
              <motion.div className="text-white text-4xl  sm:text-5xl md:text-6xl">
                Mauro José <br />
                <span className=" font-extrabold text-7xl">Ciappina</span>
              </motion.div>
              <motion.div className="text-white text-lg sm:text-xl md:text-2xl my-4">
                Full Stack Developer
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-8"
              initial="hidden"
              animate={controls}
              variants={headerVariants}
            >
              <motion.div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform transform hover:scale-110"
                  initial="hidden"
                  animate={controls}
                  variants={iconVariants}
                >
                  <FaLinkedin size={40} />
                </motion.a>
                <motion.a
                  href="https://github.com/your-github-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform transform hover:scale-110"
                  initial="hidden"
                  animate={controls}
                  variants={iconVariants}
                >
                  <FaGithub size={40} />
                </motion.a>
                <motion.a
                  href="https://twitter.com/your-twitter-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform transform hover:scale-110"
                  initial="hidden"
                  animate={controls}
                  variants={iconVariants}
                >
                  <FaTwitter size={40} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Aquí se agrega la imagen a la derecha */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={img1} alt="Home" className="w-full lg:w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
