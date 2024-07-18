import React, { useState, useEffect } from "react";
import axios from "axios";

const Clima = () => {
  console.log("Rendering Clima component");

  const [ciudad, setCiudad] = useState(""); // Estado para almacenar el nombre de la ciudad
  const [clima, setClima] = useState(null); // Estado para almacenar los datos del clima
  const [error, setError] = useState(null); // Estado para manejar errores
  const [isLoading, setIsLoading] = useState(true); // Estado para indicar si se está cargando la información
  const [location, setLocation] = useState({}); // Estado para almacenar la geolocalización

  useEffect(() => {
    console.log("useEffect called");

    // Obtener la geolocalización
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Current position:", position);
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.log("Error getting current position:", error);
        setError(error.message);
        setIsLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (!location.lat || !location.lon) {
      console.log("Location not available yet");
      return;
    }

    console.log("useEffect called with location", location);
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=443e5f8c00a24320aa5181012241807&q=${location.lat},${location.lon}`
      )
      .then((response) => {
        console.log("Response received:", response);
        setClima(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error getting weather data:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [location]);

  if (isLoading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("Error:", error);
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{clima.location.name}</h1>
      <p>{clima.current.temp_c}°C</p>
    </div>
  );
};

export default Clima;