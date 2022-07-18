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

  const COLORS = ["#FBFBFB", "#FF0000"];

  return (
    <figure className={"dashboard-content--custompiechart"}>
      <figcaption>Score</figcaption>
      <PieChart width={160} height={160}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            position={"center"}
            value={USER_MAIN_DATA[0].todayScore * 100 + "%"}
          />
        </Pie>
      </PieChart>
    </figure>
  );
};
