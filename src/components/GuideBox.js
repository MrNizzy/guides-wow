import React, { useState } from "react";
import IconClass from "./IconClass";
import Data from "../Data_Cataclysm.json";
import IconHeal from "../resources/icons/Healer_icon.png";
import IconDps from "../resources/icons/Dps_icon.png";
import IconTank from "../resources/icons/Tank_icon.png";
import IconDeathknight from "../resources/icons/class/class-deathknight.png";
import IconDruid from "../resources/icons/class/class-druid.png";
import IconHunter from "../resources/icons/class/class-hunter.png";
import IconMage from "../resources/icons/class/class-mage.png";
import IconPaladin from "../resources/icons/class/class-paladin.png";
import IconPriest from "../resources/icons/class/class-priest.png";
import IconRogue from "../resources/icons/class/class-rogue.png";
import IconShaman from "../resources/icons/class/class-shaman.png";
import IconWarlock from "../resources/icons/class/class-warlock.png";
import IconWarrior from "../resources/icons/class/class-warrior.png";
import IconNull from "../resources/icons/class/null-icon.jpg";
import IconCross from "../resources/icons/class/icon-equis.png";

const GuideBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="guide-box">
      <div className="guide-search">
        <h2>Lista de clases World of Warcraft</h2>
        <div className="search">
          <div className="search-icon"></div>
          <input
            className="search-input"
            type="text"
            placeholder="Busca una clase"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
      <IconClass />
      <div className="class-grid">
        <ul className="class-grid-list">
          {Data.filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.class.toLocaleLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          }).map((value, key) => {
            return (
              <li key={key} className="class-portrait">
                {value.class === "Caballero de la muerte" ? (
                  <a href={value.video}>
                    <img
                      src={IconDeathknight}
                      alt="Deathknight"
                      className="img-class"
                    />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.short_name}
                    </h5>
                  </a>
                ) : value.class === "Druida" ? (
                  <a href={value.video}>
                    <img src={IconDruid} alt="Druid" className="img-class" />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                ) : value.class === "Cazador" ? (
                  <a href={value.video}>
                    <img src={IconHunter} alt="Hunter" className="img-class" />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                ) : value.class === "Mago" ? (
                  <a href={value.video}>
                    <img src={IconMage} alt="Mage" className="img-class" />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                ) : value.class === "Paladin" ? (
                  <a href={value.video}>
                    <img
                      src={IconPaladin}
                      alt="Paladin"
                      className="img-class"
                    />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                ) : value.class === "Sacerdote" ? (
                  <a href={value.video}>
                    <img src={IconPriest} alt="Priest" className="img-class" />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                ) : value.class === "Picaro" ? (
                  <a href={value.video}>
                    <img src={IconRogue} alt="Rogue" className="img-class" />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                ) : value.class === "Chamán" ? (
                  <a href={value.video}>
                    <img src={IconShaman} alt="Shaman" className="img-class" />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                ) : value.class === "Brujo" ? (
                  <a href={value.video}>
                    <img
                      src={IconWarlock}
                      alt="Warlock"
                      className="img-class"
                    />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                ) : value.class === "Guerrero" ? (
                  <a href={value.video}>
                    <img
                      src={IconWarrior}
                      alt="Warrior"
                      className="img-class"
                    />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                ) : (
                  <a href={value.video}>
                    <img src={IconNull} alt="Icon null" className="img-class" />
                    <h5 className="text-center w-400 color--no-focus">
                      {value.class}
                    </h5>
                  </a>
                )}
                {value.rol === "dps" ? (
                  <img src={IconDps} alt="DPS" className="class-type" />
                ) : value.rol === "heal" ? (
                  <img src={IconHeal} alt="Heal" className="class-type" />
                ) : value.rol === "tank" ? (
                  <img src={IconTank} alt="Tank" className="class-type" />
                ) : (
                  <img src={IconCross} alt="Icon cross" className="class-type-null" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GuideBox;
