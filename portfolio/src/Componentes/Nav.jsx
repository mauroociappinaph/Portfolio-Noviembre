import Logo from "../../src/asset/logo/Logo.png";
import { FaRegClock } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <nav className="flex items-center justify-around p-4 bg-primary">
      <div className="flex items-center">
        {Logo && (
          <img src={Logo} alt="Logo" className="w-16 h-16 mr-4 rounded-full" />
        )}
      </div>
      <div
        className="text-white text-lg"
        style={{ fontFamily: "Arial, sans-serif", fontSize: "18px" }}
      >
        <p>
          {days[time.getDay()]} {time.getDate().toString().padStart(2, "0")} de{" "}
          {months[time.getMonth()]} de {time.getFullYear()}
        </p>
      </div>
      <div
        className="text-white text-lg"
        style={{ fontFamily: "Arial, sans-serif", fontSize: "18px" }}
      >
        <p>
          {time.getHours().toString().padStart(2, "0")}:
          {time.getMinutes().toString().padStart(2, "0")}
        </p>
      </div>
    </nav>
  );
};

export default Nav;
