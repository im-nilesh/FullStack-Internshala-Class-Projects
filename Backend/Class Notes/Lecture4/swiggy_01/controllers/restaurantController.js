const RestaurantModel = require("../models/Restaurant.model");

async function createRestaurant(req, res) {
  try {
    let { name, imgUrl, rating, cuisines, deliveryTime } = req.body;
    let newRestaurant = await RestaurantModel.create({
      name,
      imgUrl,
      rating,
      cuisines,
      deliveryTime,
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function fetchRestaurant(req, res) {
  try {
    let data = await RestaurantModel.find({});
    if (!data) {
      return res.status(404).json({
        msg: "No Restaurants Found",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createRestaurant,
  fetchRestaurant,
};
