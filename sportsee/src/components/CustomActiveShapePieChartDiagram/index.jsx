import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";
import { USER_MAIN_DATA } from "../../assets/data/data";

export const CustomActiveShapePieChartDiagram = () => {
  const data = [
    { name: "Group A", value: 1 - USER_MAIN_DATA[0].todayScore },
    { name: "Group B", value: USER_MAIN_DATA[0].todayScore },
  ];

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
            startAngle={90} //placement de valeur au commencement du cercle
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
        <label id={"custompiechart--label-one"}>
          {USER_MAIN_DATA[0].todayScore * 100 + "%"}
        </label>
        <label id={"custompiechart--label-two"}>de votre</label>
        <label id={"custompiechart--label-three"}>objectif</label>
      </div>
    </figure>
  );
};
