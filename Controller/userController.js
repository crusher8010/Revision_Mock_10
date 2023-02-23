const Users = require('../models/UserModel');


exports.Register = async (req, res) => {
    try {

        const newUser = await Users.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                newUser
            }
        })


    } catch (err) {
        res.status(400).json({
            status: 'fail',
            err
        });
    }
}

exports.Login = async (req, res) => {
    try {
        let getUser = await Users.find(req.body)

        // console.log(getUser, getUser.length)

        if (getUser.length > 0) {

            res.status(201).json({
                message: "Login Successful"
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'Wrong Credentials'
            })
        }

    } catch (err) {
        // console.log(err);
        res.status(400).json({
            status: 'fail',
            err
        });
    }
}