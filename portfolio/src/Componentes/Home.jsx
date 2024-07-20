import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTrail, a } from '@react-spring/web';
import Who from "../asset/Who.png";
import { useDispatch } from 'react-redux';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState('');

  const trail = useTrail(2, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isModalOpen ? 0 : 1,
    x: isModalOpen ? 20 : 0,
    height: isModalOpen ? 0 : 110,
    from: { opacity: 0, x: 20, height: 0 },
  });

  const handleNameChange = (e) => setInputValue(e.target.value);

const handleSubmit = (e) => {
  e.preventDefault();
  if (inputValue.trim() === '') {
    alert('El nombre no puede estar vacío');
    return;
  }
  setName(inputValue);
  setInputValue('');
  setIsModalOpen(false);
  dispatch({ type: 'SET_NAME', payload: inputValue });
};
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-4">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Ingresa tu nombre</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={handleNameChange}
                className="border rounded-lg p-2 mb-4 w-full"
                placeholder="Tu nombre"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        {name && (
          <a.div className="text-2xl font-semibold text-white">
            Hola, {name}!
          </a.div>
        )}
        <img src={Who} className='w-1/4' alt="Who" />
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