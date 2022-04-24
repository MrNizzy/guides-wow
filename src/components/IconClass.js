import Deathknight from "../resources/icons/class/class-deathknight.png";
import Druid from "../resources/icons/class/class-druid.png";
import Hunter from "../resources/icons/class/class-hunter.png";
import Mage from "../resources/icons/class/class-mage.png";
import Paladin from "../resources/icons/class/class-paladin.png";
import Priest from "../resources/icons/class/class-priest.png";
import Rogue from "../resources/icons/class/class-rogue.png";
import Shaman from "../resources/icons/class/class-shaman.png";
import Warlock from "../resources/icons/class/class-warlock.png";
import Warrior from "../resources/icons/class/class-warrior.png";

const IconClass = () => {
  return (
    <div className="icon-class">
      <ul>
        <li>
          <img src={Deathknight} alt="Deathknight" />
        </li>
        <li>
          <img src={Druid} alt="Druid" />
        </li>
        <li>
          <img src={Hunter} alt="Hunter" />
        </li>
        <li>
          <img src={Mage} alt="Mage" />
        </li>
        <li>
          <img src={Paladin} alt="Paladin" />
        </li>
        <li>
          <img src={Priest} alt="Priest" />
        </li>
        <li>
          <img src={Rogue} alt="Rogue" />
        </li>
        <li>
          <img src={Shaman} alt="Shaman" />
        </li>
        <li>
          <img src={Warlock} alt="Warlock" />
        </li>
        <li>
          <img src={Warrior} alt="Warrior" />
        </li>
      </ul>
    </div>
  );
};

export default IconClass;
