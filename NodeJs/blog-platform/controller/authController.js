const User = require("../models/User");

//Register User
const register = async (req, res) => {
  const { name, email, passowrd } = req.body;

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    return res.status(400).json({
      message: "Email already exists",
    });
  }

  const user = await User.create({
    name,
    email,
    passowrd,
  });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
};

//Login User
const login = async (req, res) => {
  const { email, passowrd } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(passowrd))) {
    return res.status(401).json({
      message: "Invalid User email and password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  res.json({ token });
};

module.exports = {
  register,
  login,
};
