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
          <img src={Logo} alt="Logo" className="w-16 h-16 mr-4 rounded-full" />
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{formattedTime}</div>
        <div className="text-lg">{formattedDate}</div>
      </div>
    </nav>
  );
};

export default Nav;