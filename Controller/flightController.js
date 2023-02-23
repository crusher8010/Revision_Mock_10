const Flights = require('../models/flightModel');

exports.availableFlights = async (req, res) => {
    try {
        const allFlights = await Flights.find();

        res.status(200).json({
            status: "success",
            results: allFlights.length,
            allFlights
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Something Went Wrong"
        })
    }
}

exports.createFlight = async (req, res) => {
    try {
        const newFlight = await Flights.create(req.body);

        res.status(201).json({
            status: "success",
            newFlight
        })
    } catch (err) {
        // console.log(err)
        res.status(400).json({
            status: "fail",
            message: "Something went Wrong"
        })
    }
}

exports.getSingleFight = async (req, res) => {
    try {
        const id = req.params.id;

        const getFlight = await Flights.findById(id);

        res.status(200).json({
            status: "success",
            getFlight
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Something went Wrong"
        })
    }
}

exports.updateFlight = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedFlight = await Flights.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            updatedFlight
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Something went Wrong"
        })
    }
}

exports.deleteFlight = async (req, res) => {
    try {
        const id = req.params.id;

        Flights.findByIdAndDelete(id);

        res.status(204).json({
            status: "success",
            message: "flight deleted Successfully"
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Something went Wrong"
        })
    }
}