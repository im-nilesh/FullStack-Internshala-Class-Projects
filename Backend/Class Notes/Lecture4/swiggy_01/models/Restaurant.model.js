// write about database

const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  cuisines: String,
  rating: String,
  deliveryTime: String,
});

//model
const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);

module.exports = RestaurantModel;
