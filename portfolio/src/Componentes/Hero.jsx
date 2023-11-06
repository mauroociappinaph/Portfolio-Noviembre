import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Importa motion de framer-motion
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importa los iconos

const Hero = () => {
  // Control de animación
  const controls = useAnimation();

  // Inicia la animación cuando el componente se monta
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Define las animaciones para los elementos
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Duración y curva de aceleración personalizada
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }, // Duración y curva de aceleración personalizada
    },
  };

  return (
    <div className="bg-primary py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Agregar fondo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "url('https://tenor.com/view/earth-planet-globe-environment-black-and-white-gif-5533046')",
          backgroundSize: 'cover',
          filter: 'grayscale(100%)',
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <motion.div
              className="mb-4"
              initial="hidden"
              animate={controls}
              variants={headerVariants}
            >
              <motion.div className="text-white text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Mauro José Ciappina
              </motion.div>
              <motion.div className="text-white text-lg sm:text-xl md:text-2xl">
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
                  <FaLinkedin size={40} /> {/* Agrega el icono de LinkedIn */}
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
                  <FaGithub size={40} /> {/* Agrega el icono de GitHub */}
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
                  <FaTwitter size={40} /> {/* Agrega el icono de Twitter */}
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
