const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'A User must have a Email']
    },
    password: {
        type: String,
        required: [true, 'A User must have a password']
    }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;