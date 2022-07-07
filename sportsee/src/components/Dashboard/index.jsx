import { BarChartDiagram } from "../BarChartDiagram";
import { LineChartDiagram } from "../LineChartDiagram";
import { SimpleRadarChartDiagram } from "../SimpleRadarChartDiagram";
import { NutritionalDataGroup } from "../NutritionalDataGroup";

export const Dashboard = ({ nameUser }) => {
  return (
    <div className={"dashboard-content"}>
      <h2 className={"dashboard-content--message"}>
        Bonjour <span className={"dashboard-content--name"}>{nameUser}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <NutritionalDataGroup />
    </div>
  );
};
