import React from "react";
import Selfie from "../assets/imagenes/yo.jpg";
const ContAbout = () => {
  return (
    <div className="content__about">
      <div className="row container">
        <div className="col-7">
          <h1>About</h1>
          <img className="PhotoAbout" src={Selfie} alt="Foto Perfil" />
          <p></p>
        </div>
        <div className="col-5 letter">
          <p>
            Soy una persona dinámica y creativa, habituada al trabajo bajo
            presión. Tengo experiencia en atención al usuario y muy buenas
            relaciones interpersonales, por lo cual se me facilita el trabajo en
            equipo, lo cual además disfruto. Actualmente me encuentro en la
            búsqueda de un empleo en el que pueda demostrar mis habilidades en
            desarrolo de software aportando valor agregado a la empresa y
            ayudando a la resolución de problemas al interior de ella.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContAbout;
