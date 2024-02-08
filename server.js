const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./util/bd");
const port = process.env.PORT || 5000;
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// bd connect
connectDB();
app.listen(port, () => {
  console.log("server connect" + port);
});
