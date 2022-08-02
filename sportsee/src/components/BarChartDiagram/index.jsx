import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { findDataChart } from "../../services/postAPI";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CustomActiveShapePieChartDiagram } from "../CustomActiveShapePieChartDiagram";

/**
 * component BarChart for USER_ACTIVITY data, realized with Recharts
 * @returns {JSX.Element}
 */
export const BarChartDiagram = ({ userId }) => {
  const [posts, setPosts] = useState(null);

  //The useEffect hook cannot be an asynchronous fct, so creating a fecthAllPosts() function
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    const data = await findDataChart(
      userId,
      process.env.REACT_APP_API_ENDPOINT_USER_ACTIVITY
    );
    setPosts(data);
  };

  if (posts === null) {
    return null;
  }

  const data = [];
  posts.data.sessions.forEach((item, index) => {
    data.push({
      nameXAxis: index + 1,
      kg: item.kilogram,
      kcal: item.calories,
    });
  });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="barchart-tooltip" style={{ padding: "11px" }}>
          <p
            className="barchart-tooltip--item"
            style={{ fontSize: "7px", color: "white" }}
          >{`${payload[0].value + "kg"}`}</p>
          <p
            className="barchart-tooltip--item"
            style={{ fontSize: "7px", color: "white" }}
          >{`${payload[1].value + "Kcal"}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <figure className={"dashboard-content--barchart"}>
      <figcaption>Activité quotidienne</figcaption>
      <div className={"dashboard-content--barchart--legend"}>
        <div className={"dashboard-content--barchart--legend--item"}>
          <span
            id={"dashboard-content--barchart--legend--item--icon--kg"}
          ></span>
          <span className={"dashboard-content--barchart--legend--item--text"}>
            Poids (kg)
          </span>
        </div>
        <div className={"dashboard-content--barchart--legend--item"}>
          <span
            id={"dashboard-content--barchart--legend--item--icon--kcal"}
          ></span>
          <span className={"dashboard-content--barchart--legend--item--text"}>
            Calories brûlées (kCal)
          </span>
        </div>
      </div>
      <ResponsiveContainer aspect={4}>
        <BarChart data={data} barGap={"7%"} separator={""}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="nameXAxis" tickLine={false} />
          <YAxis orientation={"right"} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{
              fill: "#C4C4C480",
              opacity: "50%",
            }}
            content={<CustomTooltip />}
          />
          <Bar dataKey="kg" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
          <Bar
            dataKey="kcal"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </figure>
  );
};

BarChartDiagram.propTypes = {
  userId: PropTypes.string.isRequired,
};
