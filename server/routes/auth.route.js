const express = require("express");
const auth = require("../controller/authController");

const route = express.Router();

route.post("/register", auth.register);
route.post("/login", auth.login);
