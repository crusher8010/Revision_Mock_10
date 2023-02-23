const mongoose = require("mongoose");

// airline: String,
//   flightNo: String,
//   departure: String,
//   arrival: String,
//   departureTime: Date,
//   arrivalTime: Date,
//   seats: Number,
//   price: Number

const flightSchema = mongoose.Schema({
    airline: {
        type: String,
        required: true
    },
    flightNo: {
        type: String,
        required: true
    },
    departure: {
        type: String,
        required: true
    },
    arrival: {
        type: String,
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Flights = mongoose.model("flight", flightSchema);

module.exports = Flights;