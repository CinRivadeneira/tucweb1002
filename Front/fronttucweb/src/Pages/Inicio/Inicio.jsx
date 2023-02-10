import React from 'react';
import Navbar from "../../Components/Navbar";
import Slider from "../../Components/Slider";
import InicioBody from "../../Pages/Inicio/InicioBody";
import Footer from "../../Components/Footer"

const Inicio = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <InicioBody />
      <Footer />
    </>
  )

}

export default Inicio;