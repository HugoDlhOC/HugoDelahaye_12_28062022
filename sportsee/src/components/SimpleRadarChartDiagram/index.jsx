import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { USER_PERFORMANCE } from "../../assets/data/data";

export const SimpleRadarChartDiagram = () => {
  const data = [];

  USER_PERFORMANCE[0].kind.forEach((item, index) => {
    data.push({
      kindName: item,
    });
  });

  USER_PERFORMANCE[0].data.forEach((item, index) => {
    data.push({
      value: item.value,
      kind: item.kind,
    });
  });

  console.log(data);

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
