import { BarChartDiagram } from "../BarChartDiagram";
import { LineChartDiagram } from "../LineChartDiagram";
import { SimpleRadarChartDiagram } from "../SimpleRadarChartDiagram";
import { NutritionalDataGroup } from "../NutritionalDataGroup";
import { CustomActiveShapePieChartDiagram } from "../CustomActiveShapePieChartDiagram";
import PropTypes from "prop-types";

export const Dashboard = ({ nameUser }) => {
  return (
    <div className={"dashboard-content"}>
      <div className={"dashboard-content--userinfo"}>
        <h2 className={"dashboard-content--message"}>
          Bonjour <span className={"dashboard-content--name"}>{nameUser}</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className={"dashboard-content--diagrams-nutritionalgroup"}>
        <BarChartDiagram />
        <LineChartDiagram />
        <SimpleRadarChartDiagram />
        <CustomActiveShapePieChartDiagram />
        <NutritionalDataGroup />
      </div>
    </div>
  );
};

Dashboard.prototype = {
  nameUser: PropTypes.string.isRequired,
};
