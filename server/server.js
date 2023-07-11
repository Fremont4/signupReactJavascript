// for wrting our apis

//write the api codes here
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const PORT = 3000;
// const UsersModel = require("./models/Users");
// const employeeRoutes = express.Router();

// const app = express();
// transport the data from front end to backend in json formatt
// app.use(express.json());
// app.use(cors({ origin: true, credentials: true }x));
// app.use(bodyParser.json());

// create connection with mongodb
// mongoose.connect("mongodb://localhost:27017/users", {
//   useNewUrlParser: true,
// });
// const connection = mongoose.connection;

// connection.once("open", function () {
//   console.log("database connection successful");
// });

// api to post into the database

// app.post("/register", (req, res) => {
//   UsersModel.create(req.body);
//   UsersModel.Save()
//     .then((users) => res.json(users))
//     .catch((error) => res.json(error));
// });

// app.post("", (req, res) => {
//   const { firstName,lastName,email, password } = req.body;
//   UsersModel.findOne({ firstName,lastName,email, password  })
//     .then((user) => {
//       if (user) {
//         if (user.password === password) {
//           res.json("successful");
//         } else {
//           res.json("username or password is incorrect");
//         }
//       } else {
//         res.json("no record existed");
//       }
//     })
//     .catch((error) => res.json(error));
// });

// app.listen(PORT, function () {
//   console.log("server is running ");
// });
