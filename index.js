const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// APIS Endpoints
const userRoutes = require("./AllRoutes/userRoutes");
const flightsRouter = require("./AllRoutes/flightsRoutes");
const bookingRouter = require("./AllRoutes/bookingRoutes")

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}))

app.use('/', userRoutes);
app.use("/", flightsRouter);
app.use("/", bookingRouter);

const DB = process.env.URL.replace('<password>', process.env.password);
mongoose.connect(DB).then(() => console.log("Database Connected")).catch((err) => console.log("Database Not Connected"));

let port = process.env.port;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})