// Hace un componente que sea un slice con logos de las marcas con la que he trabajado. Que los logos se muevan de izquierda a derecha y sean de un color gris.

//Anima los logos en este componente
import React, { useState, useEffect } from "react";

const Clientes = () => {
  const [logos, setLogos] = useState([
    { id: 1, src: img1, active: true },
    { id: 2, src: img2, active: false },
    { id: 3, src: img3, active: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogos = logos.map((logo) =>
        logo.id === logos.length ? logos[0] : { ...logo, active: false }
      );
      newLogos[0].active = true;
      setLogos(newLogos);
    }, 3000);
    return () => clearInterval(interval);
  }, [logos]);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Algunos de mis clientes</h1>
      <div className="flex flex-wrap justify-center">
        {logos.map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={`Logo ${logo.id}`}
            className={`w-40 h-40 m-4 ${logo.active ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Clientes;
