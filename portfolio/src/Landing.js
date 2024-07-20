import React from "react";
import { Link } from "react-scroll";
import AboutMe from "./Componentes/AboutMe";
import Hero from "./Componentes/Hero";
import Proyectos from "./Componentes/Proyectos";
import Footer from "./Componentes/Footer";
import SoftSkills from "./Componentes/SoftSkills";
import Form from "./Componentes/Form";
import Nav from "./Componentes/Nav";
import Technologies from "./Componentes/Tecnologias";
import TicTacToe from "./Componentes/TicTacToe";
import Help from "./Componentes/Help";

function Landing() {
  return (
    <>
      <Nav>
        <Link to="hero" smooth={true} duration={500}>
          Inicio
        </Link>
        <Link to="about-me" smooth={true} duration={500}>
          Acerca de mí
        </Link>
        <Link to="soft-skills" smooth={true} duration={500}>
          Habilidades blandas
        </Link>
        <Link to="technologies" smooth={true} duration={500}>
          Tecnologías
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Proyectos
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contacto
        </Link>
      </Nav>
      <Hero id="hero" />
      <AboutMe id="about-me" />
      <SoftSkills id="soft-skills" />
      <Help id="help"/>
      <Technologies id="technologies" />
      <Proyectos id="projects" />
      {/* <TicTacToe  id="tic-tac-toe"/> */}
      <Form id="contact" />
      <Footer />
    </>
  );
}

export default Landing;
