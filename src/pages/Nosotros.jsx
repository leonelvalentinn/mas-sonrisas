import React from "react";
import HeroAbout from "../components/HeroAbout";
import LineaTime from "../components/LineaTime";
import Team from "../components/Team";

const Nosotros = () => {
  let desplazamiento = document.documentElement.scrollTop;
  let abajo = 700;
  const regresaArriba = () => {
    if (desplazamiento >= abajo) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  window.addEventListener("scroll", regresaArriba());
  return (
    <div>
      <HeroAbout />
      <LineaTime />
      <Team />
    </div>
  );
};

export default Nosotros;
