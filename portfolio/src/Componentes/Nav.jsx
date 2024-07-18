import Logo from "../../src/asset/logo/Logo.png";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour] = useState(true); // Removed toggle functionality

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = is24Hour
    ? time.toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit', hour12: false })
    : time.toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit', hour12: true });

  const formattedDate = time.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <nav className="flex items-center justify-around p-4 bg-primary text-white">
      <div className="flex items-center">
        {Logo && (
          <img src={Logo} alt="Logo de la empresa X" className="w-20 h-20 mr-4 rounded-full" />
        )}
      </div>
      <div className="flex flex-col items-center">
        <time className="text-4xl font-bold transition duration-500 ease-in-out" dateTime={time.toISOString()} aria-live="polite">
          {formattedTime}
        </time>
        <time className="text-lg" dateTime={time.toISOString().split('T')[0]}>
          {formattedDate}
        </time>
      </div>
    </nav>
  );
};

export default Nav;