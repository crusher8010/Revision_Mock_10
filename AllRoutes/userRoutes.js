const express = require("express");
const { Login, Register } = require("../Controller/userController");

const Router = express.Router();

Router.route("/register").post(Register);
Router.route("/login").post(Login);

module.exports = Router;