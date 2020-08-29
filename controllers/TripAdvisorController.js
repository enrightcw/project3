const axios = require("axios");
const url = "https://tripadvisor1.p.rapidapi.com";
const headers = {
  "content-type": "application/json; charset=utf8",
  "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
  "x-rapidapi-key": "11260c9019msh8864ed8d947ccf6p17416cjsn70d177e334a6",
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
      params: req.query,
      headers,
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(error.response.status).end();
    });
};

module.exports = {
  searchLocations,
};
