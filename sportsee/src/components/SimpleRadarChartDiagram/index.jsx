import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../assets/data/data";

export const SimpleRadarChartDiagram = () => {
  const data = [];

  Object.values(USER_PERFORMANCE[1].kind).forEach((item, index) => {
    data.push({
      subject: item.charAt(0).toUpperCase() + item.slice(1), //Uppercase first letter like the page on Figma
      A: USER_PERFORMANCE[1].data[index].value,
    });
  });

  data.reverse(); //inversement des données pour correspondre à la maquette

  return (
    <figure className={"dashboard-content--radarchart"}>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke={"white"} radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke={"white"}
            fontSize={"12px"}
            tickLine={false}
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </figure>
  );
};
