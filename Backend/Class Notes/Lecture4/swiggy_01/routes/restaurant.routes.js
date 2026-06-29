const {
  createRestaurant,
  fetchRestaurant,
} = require("../controllers/restaurantController");

function restaurantRoutes(app) {
  app.post("/api/restaurants", createRestaurant);
  app.get("/api/restaurants", fetchRestaurant);
}

module.exports = restaurantRoutes;
