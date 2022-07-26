import "../../css/style.css";
import { LogoSportSee } from "../LogoSportSee";

/**
 * component for display the header of the home page
 * @returns {JSX.Element}
 */
export const Header = () => {
  return (
    <header>
      <div className={"logo"}>
        <a href={"#"}>
          <LogoSportSee
            width={"57px"}
            height={"57px"}
            fillBackground={"#FF0101"}
            fillBody={"#020203"}
            fillHead={"#020203"}
          />
        </a>
        <h1 className={"logo__title"}>SportSee</h1>
        <ul className={"logo__menu"}>
          <a id={"logo__menu__home"} href={"#"}>
            <li>Accueil</li>
          </a>
          <a id={"logo__menu__account"} href={"#"}>
            <li>Profil</li>
          </a>
          <a id={"logo__menu__setting"} href={"#"}>
            <li>Réglage</li>
          </a>
          <a id={"logo__menu__community"} href={"#"}>
            <li>Communauté</li>
          </a>
        </ul>
      </div>
    </header>
  );
};
