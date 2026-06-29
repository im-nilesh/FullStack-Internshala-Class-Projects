const express = require("express");

const app = new express();

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://nileshdadab_db_user:WkqcvqyEGrgBdis0@cluster0.sxgmjna.mongodb.net/?appName=Cluster0",
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(8080, () => {
  console.log("SERVER IS RUNNING");
});
