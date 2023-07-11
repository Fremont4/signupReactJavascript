const port = 5000;
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const UsersModel = require("./models/Users.js");
// const employeeRoutes = express.Router();

const app = express();

// transport the data from front end to backend in json formatt
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

// create connection with mongodb
mongoose.connect("mongodb://127.0.0.1:27017/users", {});
const connection = mongoose.connection;

app.get("/", (req, res) => {});

// api to post into the database

app.post("/register", (req, res) => {
  UsersModel.create(req.body)
    // UsersModel.Save()
    .then((users: any) => res.json(users))
    .catch((error: any) => res.json(error));
});

app.listen(port, function () {
  console.log("server is running " + port);
});
