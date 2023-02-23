const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    user: {
        type: Object, ref: 'User'
    },
    flight: {
        type: Object, ref: 'Flight'
    }
});

const Bookings = mongoose.model("Bookings", bookingSchema);

module.exports = Bookings;