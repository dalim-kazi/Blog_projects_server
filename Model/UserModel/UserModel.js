const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
},{timestamps:true});

const userModel = mongoose.model("userModel", schema);
module.exports = userModel;
