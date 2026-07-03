const express = require("express");
const restaurantRoutes = require("./routes/restaurant.routes");
const app = new express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://nileshdadab_db_user:WkqcvqyEGrgBdis0@cluster0.sxgmjna.mongodb.net/?appName=Cluster0",
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Connection Failed");
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Server is running");
});

restaurantRoutes(app);
userRoutes(app);

app.listen(8080, () => {
  console.log("SERVER IS RUNNING");
});
