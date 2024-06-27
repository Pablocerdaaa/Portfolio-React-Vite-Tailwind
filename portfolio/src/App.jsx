// src/App.jsx

import React from "react";
import Navbar from './components/Navbar';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Card from "./components/Card";
import backgroundSM from "./assets/background/sobre-mi.jpg";

const App = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center "
      style={{backgroundImage: `url(${backgroundSM})`}}
    >
      <Navbar />
      <h1 className="text-3xl font-bold underline p-10 text-center">Pablo Cerda Isasmendi</h1>
      <div className="flex justify-center">
        <Card
          title="Sobre mí"
          description="Soy Pablo Cerda Isasmendi, nacido en Chillán y actualmente residiendo en Antofagasta. Me titulé en Ingeniería en Computación e Informática en 2024. Estoy expandiendo mis conocimientos en desarrollo web, tanto en backend como en frontend, con un enfoque particular en React y Tailwind CSS.

Además, tengo experiencia en la evaluación de proyectos TI y data science. Estoy entusiasmado por adquirir más conocimientos y experiencia profesional en estos campos, siempre buscando nuevos desafíos y oportunidades para crecer y mejorar mis habilidades."
          backgroundImage="/assets/background/sobre-mi.jpg" // Esta línea es opcional según cómo estés usando la imagen en el componente Card
        />
      </div>
      <footer className="bg-gray-900 text-white py-6 text-center absolute bottom-0 w-full">
        <p>&copy; 2024 Pablo Cerda Isasmendi. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
