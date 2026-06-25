import mongoose, { Mongoose } from "mongoose";
import express from "express";
import User from "./schema/userSchema.js";

const app = new express();
const port = 5100;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect("mongodb://localhost:27017");
const db = mongoose.connection;

db.on("open", () => {
  console.log("Database connected");
});
db.on("error", () => {
  console.log("Database connection error");
});

const newUser = User({
  name: "Nilesh",
  age: 22,
  isAdult: true,
});

newUser.save().then((data) => {
  console.log(data);
});
