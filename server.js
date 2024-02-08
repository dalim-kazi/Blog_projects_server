const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./util/bd");
const appRouter = require("./Routes/routes");
const handleError = require("./middlewares/handleError");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

// connect router
app.use(appRouter);
// handle error 
app.use(handleError)
// bd connect
connectDB();
app.listen(port, () => {
  console.log("server connect" + port);
});
