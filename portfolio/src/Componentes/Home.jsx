import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTrail, a } from '@react-spring/web';

function Home() {
  const [open, setOpen] = useState(true);

  const trail = useTrail(2, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-4">
      <div className="space-y-6 text-center">
        <a.div style={trail[0]} className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Bienvenido a mi portafolio
        </a.div>
        <a.div style={trail[1]}>
          <Link
            to="/landing"
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Inicio
          </Link>
        </a.div>
      </div>
    </div>
  );
}

export default Home;