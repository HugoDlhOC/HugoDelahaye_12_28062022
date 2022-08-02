import React, { useEffect, useState } from "react";
import { findDataChart } from "../../services/postAPI";
import { CustomHover } from "../CustomHover";
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
import PropTypes from "prop-types";
import { BarChartDiagram } from "../BarChartDiagram";

/**
 * component LineChartDiagram for USER_AVERAGE_SESSIONS data, realized with Recharts
 * @returns {JSX.Element}
 */
export const LineChartDiagram = ({ userId }) => {
  const [posts, setPosts] = useState(null);

  //The useEffect hook cannot be an asynchronous fct, so creating a fecthAllPosts() function
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    const data = await findDataChart(
      userId,
      process.env.REACT_APP_API_ENDPOINT_AVERAGE_SESSIONS
    );
    setPosts(data);
  };

  if (posts === null) {
    return null;
  }

  const data = [];
  posts.data.sessions.forEach((item, index) => {
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

LineChartDiagram.propTypes = {
  userId: PropTypes.string.isRequired,
};
