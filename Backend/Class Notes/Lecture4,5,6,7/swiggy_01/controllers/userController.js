const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  let { fullName, email, password } = req.body;
  let data = await UserModel.findOne({ email });
  if (data) {
    return res.status(409).json({ msg: "user already exists" });
  } else {
    let newUser = await UserModel.create({
      fullName,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    return res.status(201).json(newUser);
  }
}

async function login(req, res) {
  let { email, password } = req.body;
  let data = await UserModel.findOne({ email });
  const secret = "mySecretKey123";

  if (!data) {
    return res.status(409).json({ msg: "user doesnot exists" });
  }

  let validPassword = bcrypt.compareSync(password, data.password);

  if (!validPassword) {
    return res.status(403).json({ msg: "Invalid creds" });
  }

  const token = jwt.sign(
    {
      id: data._id,
      email: data.email,
    },
    secret,
    { expiresIn: "1d" },
  );
  return res.status(200).json({
    user: {
      email: data.email,
      fullName: data.fullName,
    },
    // accessToken: token
    accessToken: token,
  });
}
module.exports = { register, login };
