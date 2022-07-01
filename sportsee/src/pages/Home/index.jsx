import { USER_MAIN_DATA } from "../../assets/data/data"; //Tab d'objets
import { Header } from "../../components/Header";
import { SportsList } from "../../components/SportsList";
import { Dashboard } from "../../components/Dashboard";
import { BarChartDiagramTest } from "../../components/BarChartDiagramTest";
import { BarChartDiagram } from "../../components/BarChartDiagram";
import { LineChartDiagram } from "../../components/LineChartDiagram";
import { SimpleRadarChartDiagram } from "../../components/SimpleRadarChartDiagram";

export const Home = (props) => {
  console.log(USER_MAIN_DATA[0].userInfos.firstName);
  return (
    <div>
      <Header />
      <section id={"dashboard"}>
        <SportsList />
        <Dashboard nameUser={USER_MAIN_DATA[0].userInfos.firstName} />
      </section>
      <BarChartDiagramTest />
      <BarChartDiagram />
      <LineChartDiagram />
    </div>
  );
};
