//This file is used to manage requests
/**
 * The role of this function is to fetch all posts from the API
 * @param dataAPI
 * @returns {Promise}
 */
export const findAll = (userID) => {
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
};

/**
 * The role of this function is to fetch the data from the different charts
 * @param userID
 * @param typeOfChart
 * @returns {Promise}
 */
export const findDataChart = (userID, typeOfChart) => {
  return fetch(`${process.env.REACT_APP_API_URL}${userID}/${typeOfChart}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => data);
};
