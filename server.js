const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./util/bd");
const appRouter = require("./Routes/routes");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

// connect router
app.use(appRouter);
// bd connect
connectDB();
app.listen(port, () => {
  console.log("server connect" + port);
});
