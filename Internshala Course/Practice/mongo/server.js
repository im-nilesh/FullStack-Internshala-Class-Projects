// import express from "express";
// import mongoose from "mongoose";

const { default: mongoose } = require("mongoose");

// const app = express();

// app.use(express.json());

// mongoose
//   .connect("connenction string")
//   .then(() => {
//     console.log("Server is connected");
//   })
//   .catch(() => {
//     console.log("Server connection failed");
//   });

// app.listen(5001, () => {
//   console.log(`Server is running on port 5001`);
// });

// const userSchema = new mongoose.Schema({
//   Name: {
//     type: String,
//     required: true,
//   },
//   Email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   age: {
//     type: Number,
//   },
//   isAdmin: {
//     type: Boolean,
//   },
// });

// const userModal = mongoose.model("user", userSchema);
