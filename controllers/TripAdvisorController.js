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
        query:req.query.location,
        query:req.query.typeOfFood
      },
      headers,
    })
    .then((response) => {
      res.status(200).json(response.data.data);
    })
    .catch((error) => {
      console.log(error)
      res.status(422).send(error);
    });
};

module.exports = {
  searchLocations,
};
