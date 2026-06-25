import mongoose from "mongoose";

const userSchemaa = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: { type: Number, required: true },
  isAdult: Boolean,
});

const User = mongoose.model("User", userSchemaa);

export default User;
