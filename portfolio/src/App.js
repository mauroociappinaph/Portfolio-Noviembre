import AboutMe from "./Componentes/AboutMe";
import Hero from "./Componentes/Hero";
import Proyectos from "./Componentes/Proyectos";
import Footer from "./Componentes/Footer";
import SoftSkills from "./Componentes/SoftSkills";
import Form from "./Componentes/Form";
import Nav from "./Componentes/Nav";
import Technologies from "./Componentes/Tecnologias";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <SoftSkills />
      <Technologies />
      <Proyectos />
      <Form />
      <Footer />
    </>
  );
}

export default App;
