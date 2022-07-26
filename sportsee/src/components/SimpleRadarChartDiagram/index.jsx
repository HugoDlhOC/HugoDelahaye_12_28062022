import React, { useEffect, useState } from "react";
import { findDataChart } from "../../services/postAPI";
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

/**
 * component SimpleRadarChart for USER_PERFORMANCE data, realized with Recharts
 * @returns {JSX.Element}
 */
export const SimpleRadarChartDiagram = () => {
  const [posts, setPosts] = useState(null);

  //The useEffect hook cannot be an asynchronous fct, so creating a fecthAllPosts() function
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    const data = await findDataChart(
      process.env.REACT_APP_API_USERID,
      process.env.REACT_APP_API_ENDPOINT_PERFORMANCE
    );
    setPosts(data);
  };

  if (posts === null) {
    return null;
  }

  console.log(posts.data.sessions);
  const data = [];

  Object.values(posts.data.kind).forEach((item, index) => {
    data.push({
      subject: item.charAt(0).toUpperCase() + item.slice(1), //Uppercase first letter like the page on Figma
      A: posts.data.data[index].value,
    });
  });

  data.reverse(); //reverse data to match the mockup

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
