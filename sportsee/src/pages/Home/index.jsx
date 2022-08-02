import { USER_MAIN_DATA } from "../../assets/data/data"; //Tab d'objets
import { Header } from "../../components/Header";
import { SportsList } from "../../components/SportsList";
import { Dashboard } from "../../components/Dashboard";
import { useParams } from "react-router-dom";

/**
 * component of page Home
 * @returns {JSX.Element}
 */
export const Home = () => {
  const { userid } = useParams();
  return (
    <div>
      <section id={"dashboard"}>
        <SportsList />
        <Dashboard userId={userid} />
      </section>
    </div>
  );
};
