import React from "react";
import Icohtml from "../assets/microIco/logohtml.png";
import Icocss from "../assets/microIco/logocss.png";
import Icojs from "../assets/microIco/logojs.png";
import Icoreact from "../assets/microIco/logoreact.png";
import Icobootstrap from "../assets/microIco/logobootstrap.png";
import Icogithub from "../assets/microIco/logogithub.png";
import Icopostman from "../assets/microIco/logopostman.png";

const ContSkills = () => {
  return (
    <div className="ContSkills container">
      <h1>Skills</h1>

      <div className="row">
        <div className="col-6">
          <h3>Lenguajes</h3>
          <div className="styleLanguage">
            <img src={Icohtml} />
            <img src={Icocss} />
            <img src={Icojs} />
          </div>

          <h3>Librerias</h3>
          <div className="styleLibrary">
            <img src={Icoreact} />
          </div>
        </div>

        <div className="col-6">
          <h3>Frameworks</h3>
          <div className="styleFrameworks">
            <img src={Icobootstrap} />
          </div>
          <h3>Herramientas</h3>
          <div className="styleTools">
            <img src={Icogithub} />
            <img src={Icopostman} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContSkills;
