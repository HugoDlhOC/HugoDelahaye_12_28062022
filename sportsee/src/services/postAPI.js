import axios from "axios";
//Ce fichier a pour rôle de gérer les requêtes

//Le rôle de cette fonction est d'aller chercher tous les posts de l'API
export const findAll = () => {
  return fetch("http://localhost:3000/user/12")
    .then((response) => {
      return response.json();
    })
    .then((data) => data);
};

//Le rôle de cette fonction est d'aller chercher les données du diagramme en batons
export const findDataChart = (userID, typeOfChart) => {
  return fetch(`http://localhost:3000/user/${userID}/${typeOfChart}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => data);
};
