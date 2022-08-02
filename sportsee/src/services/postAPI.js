//This file is used to manage requests
import {
  USER_MAIN_DATA,
  USER_PERFORMANCE,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
} from "../assets/data/data";
/**
 * The role of this function is to fetch all posts from the API, use REACT_APP_MOCK_DATA for use mock data. 1 = mock active
 * @param dataAPI
 * @returns {Promise}
 */
export const findAll = (userID) => {
  if (process.env.REACT_APP_MOCK_DATA === "1") {
    return new Promise((resolve, reject) => {
      resolve({
        data: USER_MAIN_DATA.find((element) => element.id === parseInt(userID)),
      });
    });
  } else {
    return fetch(`${process.env.REACT_APP_API_URL}${userID}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          //redirect to catch with throw
          throw new Error("User ID is unknown");
        }
      })
      .then((data) => data);
  }
};

/**
 * The role of this function is to fetch the data from the different charts, use REACT_APP_MOCK_DATA for use mock data. 1 = mock active
 * @param userID
 * @param typeOfChart
 * @returns {Promise}
 */
export const findDataChart = (userID, typeOfChart) => {
  if (process.env.REACT_APP_MOCK_DATA === "1") {
    switch (typeOfChart) {
      case "activity":
        return new Promise((resolve, reject) => {
          resolve({
            data: USER_ACTIVITY.find(
              (element) => element.userId === parseInt(userID)
            ),
          });
        });
        break;

      case "average-sessions":
        return new Promise((resolve, reject) => {
          resolve({
            data: USER_AVERAGE_SESSIONS.find(
              (element) => element.userId === parseInt(userID)
            ),
          });
        });
        break;

      case "performance":
        return new Promise((resolve, reject) => {
          resolve({
            data: USER_PERFORMANCE.find(
              (element) => element.userId === parseInt(userID)
            ),
          });
        });
        break;
    }
  } else {
    return fetch(`${process.env.REACT_APP_API_URL}${userID}/${typeOfChart}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          //redirect to catch with throw
          throw new Error("User ID is unknown");
        }
      })
      .then((data) => data);
  }
};
