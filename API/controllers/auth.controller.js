import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import primas from "../lib/prisma.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  console.log(typeof parseInt(process.env.SALT));
  try {
    // Hash Password
    const hashPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT)
    );
    // Create a new user and save To DB
    const newUser = await primas.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });
    res.status(201).json({ message: "User create successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Fail to create user!" });
  }
};
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if The User Exists
    const user = await primas.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    // Check Password Is Correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });

    // Generate Cookie Token And Send To The User
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        maxAge: age,
        httpOnly: true,
        // secure: true
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Fail Login" });
  }
};
const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};

const verifyCookie = (req, res) => {
  // console.log(req.userId);
};

export { register, login, logout, verifyCookie };
