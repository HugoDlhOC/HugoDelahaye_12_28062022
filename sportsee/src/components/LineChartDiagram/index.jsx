import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { USER_AVERAGE_SESSIONS } from "../../assets/data/data";

export const LineChartDiagram = () => {
  const data = [];
  USER_AVERAGE_SESSIONS[0].sessions.forEach((item, index) => {
    data.push({
      nameXAxis: index + 1,
      day: item.day,
      sessionLength: item.sessionLength,
    });
  });
  console.log(data);

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
