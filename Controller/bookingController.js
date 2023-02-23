const Bookings = require("../models/bookingModel");

exports.Booking = async (req, res) => {
    try {
        const newBooking = await Bookings.create(req.body);
        // console.log(newBooking);
        res.status(201).json({
            status: "success",
            newBooking
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Something went Wrong"
        })
    }
}

exports.getAllBookings = async (req, res) => {
    try {
        let allBookings = await Bookings.find();

        res.status(200).json({
            status: "success",
            results: allBookings.length,
            allBookings
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Something went Wrong"
        })
    }
}