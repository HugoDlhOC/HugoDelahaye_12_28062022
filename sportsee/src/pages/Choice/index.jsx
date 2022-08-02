import { Link } from "react-router-dom";

/**
 * component of page for choice user
 * @returns {JSX.Element}
 */
export const Choice = () => {
  return (
    <div className={"choice-links"}>
      <h2 className={"choice-links--title"}>Veuillez choisir un utilisateur</h2>
      <Link className={"choice-links--link"} to={"/home/user/12"}>
        Utilisateur 12
      </Link>
      <Link className={"choice-links--link"} to={"/home/user/18"}>
        Utilisateur 18
      </Link>
    </div>
  );
};
