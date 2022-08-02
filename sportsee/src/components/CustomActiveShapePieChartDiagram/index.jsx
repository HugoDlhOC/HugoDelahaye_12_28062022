import React from "react";

import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";
import PropTypes from "prop-types";

/**
 * component CustomActiveShapePieChart for illustrate the user's percentage goal
 * @param dataAPI
 * @returns {JSX.Element}
 */
export const CustomActiveShapePieChartDiagram = ({ dataAPI, userId }) => {
  let data = [];
  let contentLabel;
  if (userId === "12") {
    data = [
      { name: "Group A", value: 1 - dataAPI.todayScore },
      { name: "Group B", value: dataAPI.todayScore },
    ];
    contentLabel = dataAPI.todayScore * 100 + "%";
  } else if (userId === "18") {
    data = [
      { name: "Group A", value: 1 - dataAPI.score },
      { name: "Group B", value: dataAPI.score },
    ];
    contentLabel = dataAPI.score * 100 + "%";
  }

  const dataFillingDiagram = [{ name: "Group A", value: 1 }];

  const COLORS = ["#FBFBFB", "#FF0000"];

  return (
    <figure className={"dashboard-content--custompiechart"}>
      <figcaption>Score</figcaption>
      <ResponsiveContainer height={"100%"} width={"100%"}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dataFillingDiagram}
            cx="52.5%"
            cy="39.5%"
            outerRadius={90}
            fill="white"
          />
          <Pie
            data={data}
            cx={130}
            cy={100}
            innerRadius={90}
            outerRadius={100}
            cornerRadius={10}
            colorRendering={"red"}
            colorInterpolation={"red"}
            colorProfile={"red"}
            floodColor={"red"}
            lightingColor={"red"}
            dataKey="value"
            startAngle={90} //placing value at the beginning of the circle
            endAngle={-270}
            stroke={"none"}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={"custompiechart--labels"}>
        <label id={"custompiechart--label-one"}>{contentLabel}</label>
        <label id={"custompiechart--label-two"}>de votre</label>
        <label id={"custompiechart--label-three"}>objectif</label>
      </div>
    </figure>
  );
};

CustomActiveShapePieChartDiagram.propTypes = {
  dataAPI: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};
