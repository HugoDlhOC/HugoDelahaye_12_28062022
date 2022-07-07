import React, { PureComponent } from "react";
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
import { USER_ACTIVITY } from "../../assets/data/data";

export const BarChartDiagram = (props) => {
  const data = [];
  USER_ACTIVITY[0].sessions.forEach((item, index) => {
    data.push({
      nameXAxis: index + 1,
      kg: item.kilogram,
      kcal: item.calories,
    });
  });

  console.log(USER_ACTIVITY[0].sessions.length);
  console.log(data);
  console.log(USER_ACTIVITY[0].sessions);

  const CustomTooltip = ({ kg, kcal }) => {
    return (
      <div>
        <p className={"barchart--tooltip--item"}>kg</p>
        <p className={"barchart--tooltip--item"}>Kcal</p>
      </div>
    );
  };

  return (
    <figure className={"dashboard-content--barchart"}>
      <figcaption>Activité quotidienne</figcaption>
      <div className={"dashboard-content--barchart--legend"}>
        <div className={"dashboard-content--barchart--legend--item"}>
          <span
            id={"dashboard-content--barchart--legend--item--icon--kg"}
          ></span>
          <span>Poids (kg)</span>
        </div>
        <div className={"dashboard-content--barchart--legend--item"}>
          <span
            id={"dashboard-content--barchart--legend--item--icon--kcal"}
          ></span>
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
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
