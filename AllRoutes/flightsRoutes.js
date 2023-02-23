const express = require("express");
const { availableFlights, createFlight, getSingleFight, updateFlight, deleteFlight } = require("../Controller/flightController");

const Router = express.Router();

Router.route("/flights").get(availableFlights).post(createFlight);
Router.route("/flights/:id").get(getSingleFight).patch(updateFlight).delete(deleteFlight);

module.exports = Router;