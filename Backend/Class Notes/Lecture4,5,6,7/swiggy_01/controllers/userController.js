const UserModel = require("../models/User.model");
const User = require("../models/User.model");

function register(req, res) {
  try {
    const { fullname, email, password } = req.body;
    const existingUser = user.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(409).json({ msg: "User already exists" });
    }

    let newUser = UserModel.create({
      fullname,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    user.save();
    res.status(201).json({
      message: "User registered successfully",
      user: {
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (err) {
    return res.json({ msg: err.message });
  }
}

async function login() {
  try {
    let { email, password } = req.body;
    let data = await UserModel.findOne({ email });
    if (!data) {
      return res.status(409).json({ msg: "user does not exist" });
    }
    let validPassword = bcrypt.hashSync();
  } catch (error) {}
}
