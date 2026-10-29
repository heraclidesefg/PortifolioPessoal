import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
  perfil,
  habilidades,
  projetos,
} from "./data/portfolioData";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero perfil={perfil} />

        <About perfil={perfil} />

        <Skills habilidades={habilidades} />

        <Projects projetos={projetos} />

        <Contact perfil={perfil} />
      </main>

      <Footer nome={perfil.nome} />
    </>
  );
}

export default App;