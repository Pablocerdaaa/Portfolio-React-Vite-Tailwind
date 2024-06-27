// src/App.jsx

import React from "react";
import Navbar from './components/Navbar';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline p-10">Pablo Cerda Isasmendi</h1>

      
      <ButtonGradient />
    </>
  );
};

export default App;
