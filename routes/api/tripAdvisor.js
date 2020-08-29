const express = require('express')
const TripAdvisorController = require('../../controllers/TripAdvisorController.js');

const router = express.Router();
// Trip Advisor Routes

// Search locations
router.get('/locations/search', TripAdvisorController.searchLocations);
// router.get('/restaurant/search', TripAdvisorController.searchRestaurants);

module.exports = router;