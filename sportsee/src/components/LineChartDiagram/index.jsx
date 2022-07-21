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
    switch (item.day) {
      case 1:
        data.push({
          day: "L",
          nameXAxis: index + 1,
          sessionLength: item.sessionLength,
        });
        break;
      case 2:
        data.push({
          day: "M",
          nameXAxis: index + 1,
          sessionLength: item.sessionLength,
        });
        break;
      case 3:
        data.push({
          day: "M",
          nameXAxis: index + 1,
          sessionLength: item.sessionLength,
        });
        break;
      case 4:
        data.push({
          day: "J",
          nameXAxis: index + 1,
          sessionLength: item.sessionLength,
        });
        break;
      case 5:
        data.push({
          day: "V",
          nameXAxis: index + 1,
          sessionLength: item.sessionLength,
        });
        break;
      case 6:
        data.push({
          day: "S",
          nameXAxis: index + 1,
          sessionLength: item.sessionLength,
        });
        break;
      case 7:
        data.push({
          day: "D",
          nameXAxis: index + 1,
          sessionLength: item.sessionLength,
        });
        break;
    }
  });
  console.log(data);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="linechart-tooltip"
          style={{
            backgroundColor: "white",
            padding: "14px",
            marginTop: "0px",
            marginLeft: "0px",
          }}
        >
          <p
            className="linechart-tooltip--item"
            style={{
              fontSize: "7px",
              color: "black",
              marginTop: "-5px",
              marginLeft: "-10px",
            }}
          >{`${payload[0].value + "min"}`}</p>
        </div>
      );
    }
  };

  return (
    <figure className={"dashboard-content--linechart"}>
      <p>Durée moyenne des sessions</p>
      <ResponsiveContainer aspect={1}>
        <LineChart
          data={data}
          className={"dashboard-content--linechart--svg"}
          width={258}
          height={263}
        >
          <CartesianGrid fill={"#FF0000"} vertical={false} horizontal={false} />
          <XAxis
            dataKey="day"
            stroke={"#FF7B80"}
            axisLine={false}
            tickLine={false}
            fontSize={12}
            padding={{ left: 26, right: 26 }}
            tickMargin={0}
          />

          <Tooltip content={<CustomTooltip />} cursor={<CustomHover />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            activeDot={{
              background: "#FFFFFF",
              stroke: "rgba(255, 255, 255, 0.3)",
              strokeWidth: 10,
              r: 4,
            }}
            dot={{ r: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </figure>
  );
};

const CustomHover = ({ points }) => {
  return (
    <rect
      x={points[0].x}
      y={0}
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};
