import axios from "axios";

const params = {
  location_id: "1",
  limit: "30",
  sort: "relevance",
  offset: "0",
  lang: "en_US",
  currency: "USD",
  units: "km",
  query: "pattaya",
};

export class TripAdvisorController {
  baseUrl = "https://tripadvisor1.p.rapidapi.com/";
  headers = {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
  };

  /**
   * params {
  location_id: "1",
  limit: "30",
  sort: "relevance",
  offset: "0",
  lang: "en_US",
  currency: "USD",
  units: "km",
  query: "pattaya",
};
   */
  searchLocations(req, res) {
    res.send('NOT IMPLEMENTED');
  }
}
