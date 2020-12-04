import React from "react";
import Imagen from "../assets/imagenes/AbstractBackground.jpg";
import { TitleHero } from "./TitleHero";

export const BackgroundHero = () => {
  return (
    <div>
      <img className="imgHero" src={Imagen} />
      <TitleHero />
    </div>
  );
};
