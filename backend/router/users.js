require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const User = require("../model/User");
const auth = require("../middleware/auth");

//==show all==//
// router.get("/", async (req, res) => {
//   // const allData = await User.find();
//   res.json("hello");
// });

//==registration==//
router.put("/create", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ status: "error", message: "dplicate email" });
    }
    const hash = await bcrypt.hash(req.body.password, 12);

    const createdUser = await User.create({
      email: req.body.email,
      hash,
      username: req.body.username,
      isAdmin: true,
      phone: req.body.phone,
    });

    console.log("create user:", createdUser);
    res.json({ status: "ok", message: "user created" });
  } catch (error) {
    console.log("PUT/create", error);
    res.status(400).json({ status: "error", message: "an error has occurred" });
  }
});

// {
//   "email":"gina_gina@hotmail.com",
//   "password":"123456",
//   "username":"Gina",
//   "phone":92227799,
//   "idAdmin":true

// }

//==login==//
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "not authorised" });
    }
    const result = await bcrypt.compare(req.body.password, user.hash);
    if (!result) {
      console.log("email or password error");
      return res.status(401).json({ status: "error", message: "login failed" });
    }
    const payload = {
      id: user._id,
      email: user.email,
      username: user.username,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });
    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });

    const response = { access, refresh };

    res.json(response);
  } catch (error) {
    console.log("POST/login", error);
    res.status(400).json({ status: "error", message: "login failed" });
  }
});

//==refresh==//
router.post("/refresh", async (req, res) => {
  try {
    console.log(req.body.refresh);
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);

    const payload = {
      id: decoded._id,
      email: decoded.email,
      username: decoded.username,
      isAdmin: decoded.isAdmin,
      createdAt: decoded.createdAt,
      updatedAt: decoded.updatedAt,
    };
    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });
    const response = { access };
    res.json(response);
  } catch (error) {
    console.log("POST/refresh", error);
    res.status(401).json({
      status: "error",
      message: "unauthorized",
    });
  }
});

//==give aceess==//
router.get("/users", async (req, res) => {
  // if (req.decoded.isAdmin) {
  const users = await User.find();
  res.json(users);
});

//==delete==//
router.delete("/delete", async (req, res) => {
  const { ursername } = req.body;
  await User.deleteOne({ ursername });

  res.json({ status: "ok", message: "deleted" });
});

module.exports = router;
