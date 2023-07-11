// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for our table
const UsersTable = new mongoose.Schema({
  firstName: String,
  secondName: String,
  email: String,
  password: String,
});

//create model
const UsersModel = mongoose.model("users", UsersTable);
module.exports = UsersModel;
