import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AxiosComponent = ({ userId, typeOfChart }) => {
  const [data, setData] = useState([]);

  //Comportement similaire à ComponentDidMount et ComponentDidUpdate
  //UseEffect combine ComponentDidMount & ComponentDidUpdate
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3000/user/${userId}/${typeOfChart}`
      );
      setData(result.data.data); //On met le résultat dans nos données
      //composant mit à jour
    }; //Fct fetchData qui va pouvoir être appellée plus tard
    fetchData();
    //composant monté
  }, []); //Tableau vide sinon boucle infinie, le composant se met à jour constament
  console.log(data);
  return (
    <Fragment>
      <p>{data.id}</p>
    </Fragment>
  );
};

export default AxiosComponent;
