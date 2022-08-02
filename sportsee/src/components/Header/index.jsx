import "../../css/style.css";
import { LogoSportSee } from "../LogoSportSee";
import { Link } from "react-router-dom";

/**
 * component for display the header of the home page
 * @returns {JSX.Element}
 */
export const Header = () => {
  return (
    <header>
      <div className={"logo"}>
        <Link to={"/"}>
          <LogoSportSee
            width={"57px"}
            height={"57px"}
            fillBackground={"#FF0101"}
            fillBody={"#020203"}
            fillHead={"#020203"}
          />
        </Link>
        <h1 className={"logo__title"}>SportSee</h1>
        <ul className={"logo__menu"}>
          <Link to={"/"} id={"logo__menu__home"}>
            <li>Accueil</li>
          </Link>
          <Link to={"#"} id={"logo__menu__account"}>
            <li>Profil</li>
          </Link>
          <Link to={"#"} id={"logo__menu__setting"}>
            <li>Réglage</li>
          </Link>
          <Link to={"#"} id={"logo__menu__community"}>
            <li>Communauté</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
