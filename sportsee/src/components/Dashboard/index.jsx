import { BarChartDiagram } from "../BarChartDiagram";
import { LineChartDiagram } from "../LineChartDiagram";
import { SimpleRadarChartDiagram } from "../SimpleRadarChartDiagram";
import { NutritionalDataGroup } from "../NutritionalDataGroup";
import { CustomActiveShapePieChartDiagram } from "../CustomActiveShapePieChartDiagram";
import { findAll } from "../../services/postAPI";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * component to display informations
 * @returns {JSX.Element}
 */
export const Dashboard = ({ userId }) => {
  const [posts, setPosts] = useState(null);

  //The useEffect hook cannot be an asynchronous fct, so creating a fecthAllPosts() function
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    findAll(userId)
      .then((data) => setPosts(data))
      .catch((error) => alert(error));
  };

  if (posts === null) {
    return null;
  }

  return (
    <div className={"dashboard-content"}>
      <div className={"dashboard-content--userinfo"}>
        <h2 className={"dashboard-content--message"}>
          Bonjour{" "}
          <span className={"dashboard-content--name"}>
            {posts.data.userInfos.firstName}
          </span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className={"dashboard-content--diagrams-nutritionalgroup"}>
        <div className={"dashboard-content--diagrams"}>
          <BarChartDiagram userId={userId} />
          <div className={"dashboard-content--diagrams-secondary"}>
            <LineChartDiagram userId={userId} />
            <SimpleRadarChartDiagram userId={userId} />
            <CustomActiveShapePieChartDiagram
              dataAPI={posts.data}
              userId={userId}
            />
          </div>
        </div>
        <NutritionalDataGroup dataAPI={posts.data} />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  userId: PropTypes.string.isRequired,
};
