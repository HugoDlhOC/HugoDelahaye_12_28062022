import { USER_MAIN_DATA } from "../../assets/data/data"; //Tab d'objets
import { Header } from "../../components/Header";
import { SportsList } from "../../components/SportsList";
import { Dashboard } from "../../components/Dashboard";

/**
 * component of page Home
 * @returns {JSX.Element}
 */
export const Home = () => {
  return (
    <div>
      <Header />
      <section id={"dashboard"}>
        <SportsList />
        <Dashboard nameUser={USER_MAIN_DATA[0].userInfos.firstName} />
      </section>
    </div>
  );
};
