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

  return (
    <figure className={"dashboard-content--linechart"}>
      <span>Durée moyenne des sessions</span>
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
          onMouseMove={(e) => {
            //gestionnaire d'événements personnalisé de mouvement de souris
            if (e.isTooltipActive === true) {
              //Controle si l'info bulle est active
              const div = document.querySelector(
                ".dashboard-content--linechart"
              ); //Récupération du diagramme
              const windowWidthDivChart = div.clientWidth; //Taille sur la div actuelle stockée dans
              const mouseXpercentage = Math.round(
                //Calcul permettant, avec la position de la souris obtenir un pourcentage qui va ensuite être appliqué au dégradé que l'on souhaite obtenir
                (e.activeCoordinate.x / windowWidthDivChart) * 100
              );
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`; //Application du dégradé
            }
          }}
        >
          <CartesianGrid fill={"#FF0000"} vertical={false} horizontal={false} />
          <XAxis dataKey="day" />
          <YAxis display={"none"} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </figure>
  );
};
