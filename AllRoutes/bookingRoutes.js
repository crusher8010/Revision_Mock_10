const express = require("express");
const { Booking, getAllBookings } = require("../Controller/bookingController");
const Router = express.Router();

Router.route("/booking").post(Booking);
Router.route("/dashboard").get(getAllBookings)

module.exports = Router;