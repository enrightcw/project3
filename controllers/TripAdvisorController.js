const axios = require("axios");
const url = "https://tripadvisor1.p.rapidapi.com";
const headers = {
  "content-type": "application/json; charset=utf8",
  "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_TRIPADVISOR_API_KEY,
};

/**
 * Accepts the following properties
 *   location_id: 1,
 *   limit: 30,
 *   sort: "relevance",
 *   offset: 0,
 *   lang: "en_US",
 *   currency: "USD",
 *   units: "km",
 *   query: "pattaya"
 */

 

const searchLocations = (req, res) => {
  axios
    .get(`${url}/locations/search`, {
      params: {
        query:req.query.location + " " + req.query.typeOfFood + " food",
      },
      headers,
    })
    .then((response) => {
      res.status(200).json(response.data.data.filter(item => item.result_type === "restaurants"));
    })
    .catch((error) => {
      console.log(error)
      res.status(422).send(error);
    });

};

const searchtypeOfFood = (req, res) => {
  axios
    .get(`${url}/locations/search`, {
      params: {
        query:req.query.location,
      },
      headers,
    })
    .then((response) => {
      console.log(response.data.data[0])
      const restaurants = response.data.data.filter(item => item.result_type === "restaurants")
      console.log(restaurants[0])
      res.status(200).json(restaurants);
    })
    .catch((error) => {
      console.log(error)
      res.status(422).send(error);
    });
};

module.exports = {
  searchLocations,
};
