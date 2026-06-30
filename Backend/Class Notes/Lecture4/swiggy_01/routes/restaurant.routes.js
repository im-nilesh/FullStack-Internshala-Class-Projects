const {
  createRestaurant,
  fetchRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");

function restaurantRoutes(app) {
  app.post("/api/restaurants", createRestaurant);
  app.get("/api/restaurants", fetchRestaurant);
  app.patch("/api/restaurants/:id", updateRestaurant);
  app.delete("/api/restaurants/:id", deleteRestaurant);
}

module.exports = restaurantRoutes;
